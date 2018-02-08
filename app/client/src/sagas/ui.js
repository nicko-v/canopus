import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import { SHOW_MAIN_SNACKBAR } from 'Src/constants/ui';

import UI_Actions from 'Src/action-creators/ui';


function* hideMainSnackbarOnTimeout(action) {
	yield delay(4000);
	yield put(UI_Actions.hideMainSnackbar());
}

function* watcher() {
	yield takeLatest(SHOW_MAIN_SNACKBAR, hideMainSnackbarOnTimeout);
}


export default watcher;