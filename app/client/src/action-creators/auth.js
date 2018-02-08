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
import { DEMO_SIGN_IN } from 'Src/constants/demo';


class Auth {
	static demoSignIn() {
		return {
			type: DEMO_SIGN_IN,
			payload: null,
		};
	}

	static signInRequest(formData) {
		return {
			type: SIGN_IN_REQUEST,
			payload: formData,
		};
	}

	static signInSuccess(userData) {
		return {
			type: SIGN_IN_SUCCESS,
			payload: userData,
		};
	}

	static signInFailure(error) {
		return {
			type: SIGN_IN_FAILURE,
			payload: error,
		};
	}

	static signUpRequest(formData) {
		return {
			type: SIGN_UP_REQUEST,
			payload: formData,
		};
	}

	static signUpSuccess(userData) {
		return {
			type: SIGN_UP_SUCCESS,
			payload: userData,
		};
	}

	static signUpFailure(error) {
		return {
			type: SIGN_UP_FAILURE,
			payload: error,
		};
	}

	static signOutRequest() {
		return {
			type: SIGN_OUT_REQUEST,
			payload: null,
		};
	}

	static signOutSuccess() {
		return {
			type: SIGN_OUT_SUCCESS,
			payload: null,
		};
	}

	static signOutFailure(error) {
		return {
			type: SIGN_OUT_FAILURE,
			payload: error,
		};
	}

	static sessionRestoreRequest() {
		return {
			type: SESSION_RESTORE_REQUEST,
			payload: null,
		};
	}

	static sessionRestoreSuccess(userData) {
		return {
			type: SESSION_RESTORE_SUCCESS,
			payload: userData,
		};
	}

	static sessionRestoreFailure(error) {
		return {
			type: SESSION_RESTORE_FAILURE,
			payload: error,
		};
	}
}


export default Auth;