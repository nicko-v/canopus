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
	isAuthorized: false,
	isDemo: false,
	si_loginError: null, // Сообщения о некорректном заполнении, появляющиеся под полями ввода в формах Sign In и Sign Up
	si_passwordError: null,
	su_loginError: null,
	su_passwordError: null,
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case DEMO_SIGN_IN:
			return Object.assign({}, initialState, { isAuthorized: true, isDemo: true, });

		case SIGN_IN_SUCCESS:
		case SIGN_UP_SUCCESS:
		case SESSION_RESTORE_SUCCESS:
			return Object.assign({}, initialState, { isAuthorized: true, isDemo: false, });

		case SIGN_IN_FAILURE:
			return Object.assign({}, state, {
				si_loginError: action.payload.login,
				si_passwordError: action.payload.password,
			});

		case SIGN_UP_FAILURE:
			return Object.assign({}, state, {
				su_loginError: action.payload.login,
				su_passwordError: action.payload.password,
			});

		case SESSION_RESTORE_FAILURE:
		case SIGN_OUT_SUCCESS:
			return initialState;

		case SIGN_OUT_FAILURE:
			return state;

		default:
			return state;
	}
};


export default auth;