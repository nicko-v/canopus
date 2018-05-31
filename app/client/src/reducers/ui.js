import {
	SHOW_MAIN_DRAWER,
	HIDE_MAIN_DRAWER,
	SHOW_MAIN_LOADER,
	HIDE_MAIN_LOADER,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR,
	SWITCH_PROJECTS_LAYOUT,
} from 'Src/constants/ui';
import {
	SORT_PROJECTS,
} from 'Src/constants/project';


const initialState = {
	isMainDrawerActive: false,

	isMainLoaderActive: false,

	isSnackbarActive: false,
	snackbarMessage: null,

	projectsLayout: window.localStorage.getItem('projectsLayout') || 'tiles', // list|tiles
	projectsSortOrder: window.localStorage.getItem('projectsSortOrder') || 'name', // name|number|date
};

const ui = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MAIN_DRAWER:
			return { ...state, isMainDrawerActive: true };

		case HIDE_MAIN_DRAWER:
			return { ...state, isMainDrawerActive: false };

		case SHOW_MAIN_LOADER:
			return { ...state, isMainLoaderActive: true };

		case HIDE_MAIN_LOADER:
			return { ...state, isMainLoaderActive: false };

		case SHOW_SNACKBAR:
			return Boolean(action.payload) ? { ...state, isSnackbarActive: true, snackbarMessage: action.payload } : state;

		case HIDE_SNACKBAR:
			return { ...state, isSnackbarActive: false };

		case SORT_PROJECTS:
			return { ...state, projectsSortOrder: action.payload }

		case SWITCH_PROJECTS_LAYOUT:
			return { ...state, projectsLayout: action.payload };

		default:
			return state;
	}
};


export default ui;