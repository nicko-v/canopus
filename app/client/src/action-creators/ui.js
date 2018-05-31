import {
	SHOW_MAIN_DRAWER,
	HIDE_MAIN_DRAWER,
	SHOW_MAIN_LOADER,
	HIDE_MAIN_LOADER,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR,
	PUSH_SNACKBAR_MESSAGE,
	SWITCH_PROJECTS_LAYOUT,
} from 'Src/constants/ui';


class UI {
	static showMainDrawer() {
		return {
			type: SHOW_MAIN_DRAWER,
			payload: null,
		};
	}

	static hideMainDrawer() {
		return {
			type: HIDE_MAIN_DRAWER,
			payload: null,
		};
	}

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

	static pushSnackbarMessage(message) {
		return {
			type: PUSH_SNACKBAR_MESSAGE,
			payload: message,
		};
	}

	static showSnackbar(message) {
		return {
			type: SHOW_SNACKBAR,
			payload: message,
		};
	}

	static hideSnackbar() {
		return {
			type: HIDE_SNACKBAR,
			payload: null,
		};
	}

	static switchProjectsLayout(layout) {
		return {
			type: SWITCH_PROJECTS_LAYOUT,
			payload: layout,
		};
	}
}


export default UI;