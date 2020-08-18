import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from '../../components/Navbar';
import TriviaBody from './TriviaBody';
import { playerPontuation } from '../../action';
import calculateScore from './calculateScore';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: false,
      timer: 30,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onHandleSelect = this.onHandleSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getNextButton = this.getNextButton.bind(this);
  }

  componentDidMount() {
    const { name, assertions, score, gravatarEmail } = this.props;
    const setPlayer = JSON.stringify({
      player: { name, assertions, score, gravatarEmail },
    });
    localStorage.setItem('state', setPlayer);
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onClick(limit) {
    this.onHandleSelect();
    this.nextQuestion(limit);
    this.setState({ timer: 30 });
  }

  async onHandleSelect(isCorrect, difficulty) {
    const { timer } = this.state;
    this.setState((state) => ({
      selected: !state.selected,
    }));
    if (isCorrect) {
      await this.props.setPontuation(calculateScore(timer, difficulty));
    }
    const { name, assertions, score, gravatarEmail } = this.props;
    console.log(name, assertions, score, gravatarEmail);
    const setPlayer = JSON.stringify({
      player: { name, assertions, score, gravatarEmail },
    });
    localStorage.setItem('state', setPlayer);
  }

  getNextButton() {
    const { index } = this.state;
    if (index < 4) {
      return (
        <button
          data-testid="btn-next"
          type="button"
          className="button-next"
          onClick={() => this.onClick(5)}
        >
          PRÓXIMA
        </button>
      );
    }
    return (
      <Link to="/feedback">
        <button
          data-testid="btn-next"
          type="button"
          className="button-next"
          onClick={() => this.onClick(5)}
        >
          FEEDBACK
        </button>
      </Link>
    );
  }

  nextQuestion(limit) {
    this.setState((state) => ({
      index: state.index + (1 % limit),
    }));
  }

  timer() {
    const interval = setInterval(() => {
      this.setState((state) => {
        if (state.timer > 1) {
          return { timer: state.timer - 1 };
        }
        return { timer: 0, selected: true };
      });
    }, 1000);
    this.setState({ interval });
  }

  render() {
    const { data } = this.props;
    const { index, selected, timer } = this.state;
    if (data) {
      return (
        <div className="flexbox">
          <div className="size-game">
            <Navbar />
            <div className="btn-container">
              <div className="timer">{timer}</div>
              <TriviaBody
                data={data[index]}
                onHandleSelect={this.onHandleSelect}
                selected={selected}
              />
              {selected && this.getNextButton()}
            </div>
          </div>
        </div>
      );
    }
    return false;
  }
}

const mapStateToProps = (state) => ({
  data: state.request.data,
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  setPontuation: async (score) => dispatch(playerPontuation(score)),
});

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPontuation: PropTypes.func.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
