import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/project-add-button/main';

import ProjectAdd_Actions from 'Src/action-creators/project-add';


const mapDispatchToProps = dispatch => ({
	showProjectAddDialog(mode) { dispatch(ProjectAdd_Actions.showProjectAddDialog(mode)); },
});


@connect(null, mapDispatchToProps)
class ProjectAddButton extends React.Component {
	static propTypes = {
		externalStyles: PropTypes.string,
		showProjectAddDialog: PropTypes.func.isRequired,
	};

	state = {
		isOpen: false,
	}

	handleClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	handleClickAction = mode => {
		this.setState({ isOpen: false });
		this.props.showProjectAddDialog(mode);
	};

	handleClose = () => {
		this.setState({ isOpen: false });
	};

	handleOpen = () => {
		this.setState({ isOpen: true });
	};

	render() {
		const viewProps = {
			externalStyles: this.props.externalStyles,
			handleClick: this.handleClick,
			handleClickAction: this.handleClickAction,
			handleClose: this.handleClose,
			handleOpen: this.handleOpen,
			isOpen: this.state.isOpen,
		};

		return <View {...viewProps} />;
	}
}


export default ProjectAddButton;