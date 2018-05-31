import {
	LOAD_PROJECT_REQUEST,
	LOAD_PROJECT_SUCCESS,
	LOAD_PROJECT_FAILURE,
	SORT_PROJECTS,
} from 'Src/constants/project';


class Project {
	static loadProjectRequest(id) {
		return {
			type: LOAD_PROJECT_REQUEST,
			payload: id,
		};
	}

	static loadProjectSuccess(data) {
		return {
			type: LOAD_PROJECT_SUCCESS,
			payload: data,
		};
	}

	static loadProjectFailure(error) {
		return {
			type: LOAD_PROJECT_FAILURE,
			payload: error,
		};
	}

	static sortProjects(order) {
		return {
			type: SORT_PROJECTS,
			payload: order,
		};
	}
}


export default Project;