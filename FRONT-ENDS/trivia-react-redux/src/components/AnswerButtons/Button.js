import React from 'react';
import PropTypes from 'prop-types';
import { onHandleClick, getClasses } from './helpers';

function Button({ index, correctAnswer, result, difficulty, onHandleSelect, selected }) {
  return (
    <button
      onClick={() => onHandleClick(result, correctAnswer, difficulty, onHandleSelect)}
      className={getClasses(selected, result, correctAnswer, index)}
      disabled={selected}
      data-testid={
        result === correctAnswer ? 'correct-answer' : `wrong-answer-${index}`
      }
    >
      {result}
    </button>
  );
}

Button.propTypes = {
  index: PropTypes.number.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  onHandleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Button;
