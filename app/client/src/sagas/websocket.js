import { END, eventChannel } from 'redux-saga';
import { call, put, select, take, takeLatest } from 'redux-saga/effects';

import {
	SIGN_IN_SUCCESS,
	SIGN_UP_SUCCESS,
	SIGN_OUT_SUCCESS,
	SESSION_RESTORE_SUCCESS,
} from 'Src/constants/auth';
import { CLOSE_PREVIOUS_CONNECTION } from 'Src/constants/websocket';

import Notifications_Actions from 'Src/action-creators/notifications';
import UI_Actions from 'Src/action-creators/ui';
import WS_Actions from 'Src/action-creators/websocket';

import { getConnection } from 'Src/selectors/index';


function subscribe(ws) {
	return eventChannel(emit => {
		ws.onopen = () => {
			emit(WS_Actions.saveConnection(ws));
			DEV_ENV && console.info('[DEV] WS соединение открыто');
		};

		ws.onerror = (error) => {
			emit(UI_Actions.pushSnackbarMessage('Произошла ошибка WebSocket соединения.'));
			console.error(error);
		};

		ws.onclose = ({ code, reason, wasClean }) => {
			emit(WS_Actions.removeConnection());
			emit(END);
			wasClean || console.warn(`WebSocket соединение закрыто некорректно. ${code} ${reason}`);
			DEV_ENV && console.info('[DEV] WS соединение закрыто');
		};

		ws.onmessage = ({ data }) => {
			switch (data.type) {
				case 'notification':
					emit(Notifications_Actions.addNotification(data.payload));
					break;
			}
		};


		return () => { };
	});
}

function* openWS() {
	yield put(WS_Actions.closePreviousConnection());

	const ws = new WebSocket(WS_ADDRESS);
	const channel = yield call(subscribe, ws);

	while (true) {
		const action = yield take(channel);
		yield put(action);
	}
}

function* closeWS() {
	const connection = yield select(getConnection);

	connection && connection.close();
}

function* flow() {
	yield takeLatest([SIGN_IN_SUCCESS, SIGN_UP_SUCCESS, SESSION_RESTORE_SUCCESS], openWS);
	yield takeLatest([SIGN_OUT_SUCCESS, CLOSE_PREVIOUS_CONNECTION], closeWS);
}


export default flow;