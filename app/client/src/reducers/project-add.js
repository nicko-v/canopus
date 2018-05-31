import {
	SHOW_PROJECT_ADD_DIALOG,
	HIDE_PROJECT_ADD_DIALOG,
	ADD_PROJECT_FAILURE,
} from 'Src/constants/project-add';


const initialState = {
	errorMessages: {
		developer: '',
		name: '',
		number: '',
		order: '',
	},
	isOpen: false,
	mode: 'directory', // directory|document
};

const projectAdd = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_PROJECT_ADD_DIALOG:
			return { ...state, isOpen: true, mode: action.payload };

		case HIDE_PROJECT_ADD_DIALOG:
			return { ...initialState };

		case ADD_PROJECT_FAILURE:
			return { ...state, errorMessages: { ...action.payload } };

		default:
			return state;
	}
};


export default projectAdd;