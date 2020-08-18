import { REQUEST_QUESTIONS, REQUEST_QUESTIONS_SUCCESS, REQUEST_QUESTIONS_FAILURE } from '../action';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const request = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case REQUEST_QUESTIONS_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case REQUEST_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default request;
