import { all } from 'redux-saga/effects';

import auth from './auth';
import ui from './ui';
import user from './user';


function* rootSaga() {
	yield all([
		auth(),
		ui(),
		user()
	]);
}


export default rootSaga;