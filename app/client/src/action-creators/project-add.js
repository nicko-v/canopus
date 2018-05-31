import {
	SHOW_PROJECT_ADD_DIALOG,
	HIDE_PROJECT_ADD_DIALOG,
	ADD_PROJECT_REQUEST,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAILURE,
} from 'Src/constants/project-add';


class ProjectAdd {
	static showProjectAddDialog(mode) {
		return {
			type: SHOW_PROJECT_ADD_DIALOG,
			payload: mode,
		};
	}

	static hideProjectAddDialog() {
		return {
			type: HIDE_PROJECT_ADD_DIALOG,
			payload: null,
		};
	}

	static addProjectRequest(details) {
		return {
			type: ADD_PROJECT_REQUEST,
			payload: details,
		};
	}

	static addProjectSuccess(details) {
		return {
			type: ADD_PROJECT_SUCCESS,
			payload: details,
		};
	}

	static addProjectFailure(error) {
		return {
			type: ADD_PROJECT_FAILURE,
			payload: error,
		};
	}
}


export default ProjectAdd;