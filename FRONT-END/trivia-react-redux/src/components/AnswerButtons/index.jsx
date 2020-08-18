import React from 'react';
import PropTypes from 'prop-types';
import randomicQuestions from './randomicQuestions';
import './style.css';
import Button from './Button';
import typeData from '../types';

class AnswersButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomizedAnswers: '',
      currentQuestion: '',
    };
    this.handleRandomizedAnswers = this.handleRandomizedAnswers.bind(this);
    this.getButtons = this.getButtons.bind(this);
  }

  componentDidUpdate() {
    const { selected } = this.props;
    if (selected) return this.getButtons();
    return this.handleRandomizedAnswers();
  }

  getButtons() {
    const { data, onHandleSelect, selected } = this.props;
    const { correct_answer: correctAnswer, difficulty } = data;
    const { randomizedAnswers } = this.state;
    if (randomizedAnswers) {
      let index = -1;
      return randomizedAnswers.map((result) => {
        if (result !== correctAnswer) index += 1;
        return (
          <Button
            index={index}
            correctAnswer={correctAnswer}
            difficulty={difficulty}
            result={result}
            key={result}
            onHandleSelect={onHandleSelect}
            selected={selected}
          />
        );
      });
    }
    return <p className="loading" />;
  }

  handleRandomizedAnswers() {
    const { data } = this.props;
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = data;
    const { randomizedAnswers, currentQuestion } = this.state;
    const answers = [correctAnswer, ...incorrectAnswers];
    if (!randomizedAnswers || currentQuestion !== data.question) {
      const randomized = randomicQuestions(answers);
      this.setState({
        currentQuestion: data.question,
        randomizedAnswers: randomized,
      });
    }
  }

  render() {
    return <div>{this.getButtons()}</div>;
  }
}

AnswersButtons.propTypes = {
  data: PropTypes.shape(typeData).isRequired,
  onHandleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default AnswersButtons;
