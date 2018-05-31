import { all } from 'redux-saga/effects';

import auth from './auth';
import project from './project';
import ui from './ui';
import user from './user';
import websocket from './websocket';


function* rootSaga() {
	yield all([
		auth(),
		project(),
		ui(),
		user(),
		websocket(),
	]);
}


export default rootSaga;