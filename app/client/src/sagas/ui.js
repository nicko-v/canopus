import { delay } from 'redux-saga';
import { actionChannel, put, take } from 'redux-saga/effects';

import { PUSH_SNACKBAR_MESSAGE } from 'Src/constants/ui';

import UI_Actions from 'Src/action-creators/ui';


function* flow() {
	const channel = yield actionChannel(PUSH_SNACKBAR_MESSAGE);

	while (true) {
		const { payload } = yield take(channel);
		yield put(UI_Actions.showSnackbar(payload));
		yield delay(3500);
		yield put(UI_Actions.hideSnackbar());
		yield delay(500);
	}
}


export default flow;