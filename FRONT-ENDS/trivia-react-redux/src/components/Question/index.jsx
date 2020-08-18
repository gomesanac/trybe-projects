import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import typeData from '../types';

function Question({ data: { category, question } }) {
  return (
    <div>
      <h3 className="category" data-testid="question-category">
        {category}
      </h3>
      <p className="question" data-testid="question-text">{question}</p>
    </div>
  );
}

Question.propTypes = {
  data: PropTypes.shape(typeData).isRequired,
};

export default Question;
