import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import AnswerButtons from '../../components/AnswerButtons';
import typeData from '../../components/types';

function TriviaBody({ data, onHandleSelect, selected }) {
  if (data) {
    return (
      <div>
        <Question data={data} />
        <AnswerButtons data={data} onHandleSelect={onHandleSelect} selected={selected} />
      </div>
    );
  }
  return <p className="loading" />;
}

TriviaBody.propTypes = {
  data: PropTypes.shape(typeData).isRequired,
  onHandleSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default TriviaBody;
