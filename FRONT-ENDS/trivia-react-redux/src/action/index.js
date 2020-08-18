import { fetchApiTriviaQuestions } from '../services/apiRequest';
import emailHash from '../services/getMd5';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS_FAILURE = 'REQUEST_QUESTIONS_FAILURE';
export const LOGIN_INFO = 'LOGIN_INFO';
export const PLAYER_PONTUATION = 'PLAYER_PONTUATION';

const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

const requestSuccess = (data) =>
  ({
    type: REQUEST_QUESTIONS_SUCCESS,
    data,
  });

const requestFailure = (error) => ({
  type: REQUEST_QUESTIONS_FAILURE,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(requestQuestions());
    return fetchApiTriviaQuestions()
      .then(
        (json) => dispatch(requestSuccess(json.results)),
        (error) => dispatch(requestFailure(error)),
      );
  };
}

export const infoState = (email, name) => ({
  type: LOGIN_INFO,
  name,
  gravatar: emailHash(email),
});

export const playerPontuation = (score) => ({
  type: PLAYER_PONTUATION,
  score,
});
