import {
	LOAD_PROJECT_SUCCESS,
	LOAD_PROJECT_FAILURE,
	SORT_PROJECTS,
} from 'Src/constants/project';
import { ADD_PROJECT_SUCCESS } from 'Src/constants/project-add';
import sortProjects from 'Src/utils/sort-projects';


const initialState = {
	// Общие данные:
	id: undefined, // Number
	isDocument: undefined, // Boolean
	issues: undefined, // Number
	modifiedDate: undefined, // Object
	modifiedId: undefined, // Number
	name: undefined, // String
	number: undefined, // String
	path: [],

	// Только для директорий:
	childs: [],
	order: undefined, // String

	// Только для документов:
	branches: undefined, // Number
	developer: undefined, // String
	extension: undefined, // String
};

const project = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_PROJECT_SUCCESS:
			return { ...initialState, ...action.payload };

		case LOAD_PROJECT_FAILURE:
			return state;

		case SORT_PROJECTS:
			return { ...state, childs: [...state.childs].sort(sortProjects(action.payload)) };

		case ADD_PROJECT_SUCCESS:
			return { ...state, childs: [...state.childs, action.payload] };

		default:
			return state;
	}
};


export default project;