import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/project-add-dialog/main';

import ProjectAdd_Actions from 'Src/action-creators/project-add';


const mapStateToProps = state => ({
	isOpen: state.projectAdd.isOpen,
	mode: state.projectAdd.mode,
});
const mapDispatchToProps = dispatch => ({
	hideProjectAddDialog() { dispatch(ProjectAdd_Actions.hideProjectAddDialog()); },
});


@connect(mapStateToProps, mapDispatchToProps)
class ProjectAddDialog extends React.Component {
	static propTypes = {
		isOpen: PropTypes.bool.isRequired,
		mode: PropTypes.oneOf(['directory', 'document']),
	};

	render() {
		const viewProps = {
			handleClose: this.props.hideProjectAddDialog,
			isOpen: this.props.isOpen,
			mode: this.props.mode,
		};

		return <View {...viewProps} />;
	}
}


export default ProjectAddDialog;