import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
	LOAD_PROJECT_REQUEST,
	LOAD_PROJECT_SUCCESS,
	LOAD_PROJECT_FAILURE,
} from 'Src/constants/project';
import {
	ADD_PROJECT_REQUEST,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAILURE,
} from 'Src/constants/project-add';

import Project_Actions from 'Src/action-creators/project';
import ProjectAdd_Actions from 'Src/action-creators/project-add';
import UI_Actions from 'Src/action-creators/ui';

import { getProjectsSortOrder } from 'Src/selectors/index';

import Project_API from 'Src/api/project';

import validateAddProjectForm from 'Src/utils/validate-add-project-form';


function* loadProject(action) {
	const id = action.payload;

	try {
		yield put(UI_Actions.showMainLoader());
		const projectData = yield call(Project_API.loadProject, id);
		yield put(Project_Actions.loadProjectSuccess(projectData));
		const sortOrder = yield select(getProjectsSortOrder);
		yield put(Project_Actions.sortProjects(sortOrder));
	} catch (error) {
		yield put(Project_Actions.loadProjectFailure(error));
		yield put(UI_Actions.pushSnackbarMessage(error.message));
	} finally {
		yield put(UI_Actions.hideMainLoader());
	}
}

function* addProject(action) {
	const details = action.payload;

	try {
		yield put(UI_Actions.showMainLoader());
		yield validateAddProjectForm(details);
		const projectData = yield call(Project_API.addProject, details);
		yield put(ProjectAdd_Actions.addProjectSuccess(projectData));
		const sortOrder = yield select(getProjectsSortOrder);
		yield put(Project_Actions.sortProjects(sortOrder));
		yield put(ProjectAdd_Actions.hideProjectAddDialog());
	} catch (error) {
		yield put(ProjectAdd_Actions.addProjectFailure(error));
	} finally {
		yield put(UI_Actions.hideMainLoader());
	}
}

function* flow() {
	yield takeLatest(LOAD_PROJECT_REQUEST, loadProject);
	yield takeLatest(ADD_PROJECT_REQUEST, addProject);
}


export default flow;