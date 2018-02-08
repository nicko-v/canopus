import {
	SHOW_MAIN_LOADER,
	HIDE_MAIN_LOADER,
	SHOW_MAIN_SNACKBAR,
	HIDE_MAIN_SNACKBAR,
} from 'Src/constants/ui';


const initialState = {
	isMainLoaderActive: false,
	/*
		Можно было бы обойтись только наличием/отсутствием строки в mainSnackbarMessage,
		но в таком случае, если сообщение было достаточно длинным, заметно уменьшение длины элемента во время его исчезновения,
		поэтому mainSnackbarMessage не очищается и всегда хранит последнее сообщение.
	*/
	isMainSnackbarActive: false,
	mainSnackbarMessage: null,
	/* -=-=-=- */
};

const ui = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MAIN_LOADER:
			return Object.assign({}, state, { isMainLoaderActive: true });
		case HIDE_MAIN_LOADER:
			return Object.assign({}, state, { isMainLoaderActive: false });
		case SHOW_MAIN_SNACKBAR:
			return Object.assign({}, state, { isMainSnackbarActive: true, mainSnackbarMessage: action.payload });
		case HIDE_MAIN_SNACKBAR:
			return Object.assign({}, state, { isMainSnackbarActive: false });
		default:
			return state;
	}
};


export default ui;