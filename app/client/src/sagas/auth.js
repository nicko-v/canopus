import { call, put, takeLatest } from 'redux-saga/effects';

import {
	SIGN_IN_REQUEST,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,

	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,

	SIGN_OUT_REQUEST,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,

	SESSION_RESTORE_REQUEST,
	SESSION_RESTORE_SUCCESS,
	SESSION_RESTORE_FAILURE,
} from 'Src/constants/auth';

import Auth_Actions from 'Src/action-creators/auth';
import UI_Actions from 'Src/action-creators/ui';

import Auth_API from 'Src/api/auth';

import validateAuthForm from 'Src/utils/validate-auth-form';


function* signIn(action) {
	const { login, password } = action.payload;

	try {
		yield put(UI_Actions.showMainLoader());
		yield validateAuthForm(login, password);
		const userData = yield call(Auth_API.signIn, [login, password]);
		yield put(Auth_Actions.signInSuccess(userData));
	} catch (error) {
		yield put(Auth_Actions.signInFailure(error));
		yield put(UI_Actions.showMainSnackbar(error.message));
	} finally {
		yield put(UI_Actions.hideMainLoader());
	}
}

function* signUp(action) {
	const { login, password, passwordRepeat } = action.payload;

	try {
		yield put(UI_Actions.showMainLoader());
		yield validateAuthForm(login, password, passwordRepeat);
		const userData = yield call(Auth_API.signUp, [login, password, passwordRepeat]);
		yield put(Auth_Actions.signUpSuccess(userData));
		yield put(UI_Actions.showMainSnackbar('Успешно! Осталось только заполнить профиль.'));
	} catch (error) {
		yield put(Auth_Actions.signUpFailure(error));
		yield put(UI_Actions.showMainSnackbar(error.message));
	} finally {
		yield put(UI_Actions.hideMainLoader());
	}
}

function* signOut() {
	try {
		yield put(UI_Actions.showMainLoader());
		yield call(Auth_API.signOut);
		yield put(Auth_Actions.signOutSuccess());
	} catch (error) {
		yield put(Auth_Actions.signOutFailure(error));
		yield put(UI_Actions.showMainSnackbar(error.message));
	} finally {
		yield put(UI_Actions.hideMainLoader());
	}
}

function* restoreSession() {
	try {
		const userData = yield call(Auth_API.restoreSession);
		yield put(Auth_Actions.sessionRestoreSuccess(userData));
	} catch (error) {
		yield put(Auth_Actions.sessionRestoreFailure(error));
	}
}

function* watcher() {
	yield takeLatest(SIGN_IN_REQUEST, signIn);
	yield takeLatest(SIGN_UP_REQUEST, signUp);
	yield takeLatest(SIGN_OUT_REQUEST, signOut);
	yield takeLatest(SESSION_RESTORE_REQUEST, restoreSession);
}


export default watcher;