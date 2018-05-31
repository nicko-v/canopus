import { put, takeLatest } from 'redux-saga/effects';

import {
	SIGN_IN_SUCCESS,
	SESSION_RESTORE_SUCCESS,
} from 'Src/constants/auth';

import UI_Actions from 'Src/action-creators/ui';


function* notifyThatProfileIncompete(action) {
	const { name, surname, patronym } = action.payload;

	if (!(Boolean(name) && Boolean(surname) && Boolean(patronym))) {
		yield put(UI_Actions.pushSnackbarMessage('Пожалуйста, заполните профиль.'));
	}
}

function* flow() {
	yield takeLatest([SIGN_IN_SUCCESS, SESSION_RESTORE_SUCCESS], notifyThatProfileIncompete);
}


export default flow;