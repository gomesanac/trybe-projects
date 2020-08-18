import React from 'react';
import Navbar from '../../components/Navbar';
import GetLinks from './GetLinks';
import setLocalStorage from './setLocalStorage';
import './style.css';

class Feedback extends React.Component {
  componentDidMount() {
    setLocalStorage();
  }

  render() {
    const state = (localStorage.getItem('state') !== null)
    ? JSON.parse(localStorage.getItem('state'))
    : { player: { name: '', gravatarEmail: '', assertions: 0, score: 0 } };
    const { assertions, score } = state.player;
    const answerFeedback = assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div className="flexbox">
        <div className="size-feedback">
          <Navbar />
          <div className="feedback-container">
            <h2 data-testid="feedback-text" className="answer-feedback">{answerFeedback}</h2>
            <p className="score-assertions">
              Você fez<span data-testid="feedback-total-score"> {score} </span>pontos
            </p>
            <p className="score-assertions">...e acertou
              <span data-testid="feedback-total-question"> {assertions} </span>
            pergunta(s)!</p>
            <section>
              <div >
                <GetLinks />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
