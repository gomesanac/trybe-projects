import { LOGIN_INFO, PLAYER_PONTUATION } from '../action';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        assertions: 0,
        score: 0,
        name: action.name,
        gravatarEmail: `https://www.gravatar.com/avatar/${action.gravatar}`,
      };
    case PLAYER_PONTUATION:
      return {
        ...state,
        assertions: state.assertions + 1,
        score: state.score + action.score,
      };
    default:
      return state;
  }
};

export default login;
