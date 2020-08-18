import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../trivia.png';
import { requestFetch, infoState } from '../../action';
import './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.handleGame = this.handleGame.bind(this);
  }

  handleGame() {
    const { getData, setInfo } = this.props;
    const { email, name } = this.state;
    setInfo(email, name);
    getData();
  }

  loginButton() {
    return (
      <div>
        {this.state.email.length < 3 || this.state.name.length < 2 ? (
          <div className="uk-form-row">
            <button
              disabled
              className="btn-login-disable"
              data-testid="btn-play"
            >
              Jogar
            </button>
          </div>
        ) : (
          <div className="uk-form-row">
            <Link to="/play">
              <button
                className="btn-login"
                data-testid="btn-play"
                onClick={this.handleGame}
              >
                Entrar
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="flexbox">
        <div className="size-login">
          <img className="logo-img" src={Logo} alt="logo" />
          <form className="form">
            <div className="input-margin">
              <input
                className="input"
                onInput={(e) => this.setState({ email: e.target.value })}
                data-testid="input-gravatar-email"
                type="email" placeholder="E-mail"
              />
              <input
                className="input"
                onInput={(e) => this.setState({ name: e.target.value })}
                data-testid="input-player-name"
                type="text" placeholder="Nome"
              />
            </div>
            <div> {this.loginButton()} </div>
            <Link to="/settings"> <button className="btn-config" data-testid="btn-settings" >
              Configurações
            </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispacthToProps = (dispatch) => ({
  getData: () => dispatch(requestFetch()),
  setInfo: (email, name) => dispatch(infoState(email, name)),
});

Login.propTypes = {
  getData: PropTypes.func.isRequired,
  setInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispacthToProps)(Login);
