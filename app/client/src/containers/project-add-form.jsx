import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import AddDirectoryForm from 'Src/components/project-add-dialog/add-directory-form';
import AddDocumentForm from 'Src/components/project-add-dialog/add-document-form';

import ProjectAdd_Actions from 'Src/action-creators/project-add';


const mapStateToProps = state => ({
	errorMessages: state.projectAdd.errorMessages,
	mode: state.projectAdd.mode,
	projectId: state.project.id,
});
const mapDispatchToProps = dispatch => ({
	addProjectRequest(details) { dispatch(ProjectAdd_Actions.addProjectRequest(details)); },
});


@connect(mapStateToProps, mapDispatchToProps)
class ProjectAddForm extends React.Component {
	static propTypes = {
		addProjectRequest: PropTypes.func.isRequired,
		errorMessages: PropTypes.shape({
			developer: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
			order: PropTypes.string.isRequired,
		}).isRequired,
		mode: PropTypes.oneOf(['directory', 'document']).isRequired,
		projectId: PropTypes.number,
	};

	state = {
		developer: '',
		name: '',
		number: '',
		order: '',
	};

	handleInputChange = key => {
		return event => {
			this.setState({
				[key]: event.target.value,
			});
		};
	};

	onSubmit = event => {
		event.preventDefault();

		const { addProjectRequest, mode } = this.props;
		const details = {
			mode,
			developer: this.state.developer,
			name: this.state.name,
			number: this.state.number,
			order: this.state.order,
		};

		addProjectRequest(details);
	};

	render() {
		const isDocumentForm = this.props.mode === 'document';
		const { developer, name, number, order } = this.state;
		const { errorMessages, projectId } = this.props;
		const formProps = {
			developer,
			developerError: errorMessages.developer,
			handleInputChange: this.handleInputChange,
			name,
			nameError: errorMessages.name,
			number,
			numberError: errorMessages.number,
			onSubmit: this.onSubmit,
			order,
			orderError: errorMessages.order,
			projectId,
		};


		return isDocumentForm ?
			<AddDocumentForm {...formProps} /> :
			<AddDirectoryForm {...formProps} />;
	}
}


export default ProjectAddForm;