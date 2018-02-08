import { combineReducers } from 'redux';

import auth from './auth';
import ui from './ui';
import user from './user';


const rootReducer = combineReducers({ auth, ui, user });


export default rootReducer;