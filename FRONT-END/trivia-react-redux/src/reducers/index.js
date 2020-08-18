import { combineReducers } from 'redux';

import request from './request';
import player from './player';

const rootReducer = combineReducers({ request, player });

export default rootReducer;
