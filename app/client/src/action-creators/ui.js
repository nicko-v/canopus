import {
	SHOW_MAIN_LOADER,
	HIDE_MAIN_LOADER,
	SHOW_MAIN_SNACKBAR,
	HIDE_MAIN_SNACKBAR,
} from 'Src/constants/ui';


class UI {
	static showMainLoader() {
		return {
			type: SHOW_MAIN_LOADER,
			payload: null,
		};
	}

	static hideMainLoader() {
		return {
			type: HIDE_MAIN_LOADER,
			payload: null,
		};
	}

	static showMainSnackbar(message) {
		return {
			type: SHOW_MAIN_SNACKBAR,
			payload: message,
		};
	}

	static hideMainSnackbar() {
		return {
			type: HIDE_MAIN_SNACKBAR,
			payload: null,
		};
	}
}


export default UI;