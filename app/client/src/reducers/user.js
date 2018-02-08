import {
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,

	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,

	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,

	SESSION_RESTORE_SUCCESS,
	SESSION_RESTORE_FAILURE,
} from 'Src/constants/auth';
import { DEMO_SIGN_IN } from 'Src/constants/demo';


const initialState = {
	name: undefined,
	surname: undefined,
	patronym: undefined,
	username: undefined,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case DEMO_SIGN_IN:
			return Object.assign({}, state, {
				name: 'Иван',
				surname: 'Иванов',
				patronym: 'Иванович',
				username: 'demouser',
			});

		case SIGN_IN_SUCCESS:
		case SESSION_RESTORE_SUCCESS:
			return Object.assign({}, state, {
				name: action.payload.name,
				surname: action.payload.surname,
				patronym: action.payload.patronym,
				username: action.payload.username,
			});

		case SIGN_UP_SUCCESS:
			return Object.assign({}, initialState, { username: action.payload.username });

		case SIGN_IN_FAILURE:
		case SIGN_UP_FAILURE:
		case SIGN_OUT_SUCCESS:
		case SESSION_RESTORE_FAILURE:
			return initialState;

		case SIGN_OUT_FAILURE:
			return state;

		default:
			return state;
	}
};


export default user;