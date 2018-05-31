import { combineReducers } from 'redux';

import auth from './auth';
import notifications from './notifications';
import project from './project';
import projectAdd from './project-add';
import ui from './ui';
import user from './user';
import websocket from './websocket';


const rootReducer = combineReducers({
	auth,
	notifications,
	project,
	projectAdd,
	ui,
	user,
	websocket,
});


export default rootReducer;