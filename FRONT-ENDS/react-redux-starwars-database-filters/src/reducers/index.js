import { combineReducers } from 'redux';

import getPlanets from './getPlanets';
import filters from './filters';

const rootReducer = combineReducers({ getPlanets, filters });

export default rootReducer;