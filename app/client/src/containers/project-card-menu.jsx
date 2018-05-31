import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/project-card/header-menu';


class ProjectCardMenu extends React.Component {
	static propTypes = {
		background: PropTypes.shape({
			paper: PropTypes.string.isRequired,
		}),
		externalStyles: PropTypes.string,
		id: PropTypes.number.isRequired,
		isDocument: PropTypes.bool.isRequired,
	};

	state = {
		menuAnchorEl: null,
	};

	closeMenu = () => {
		this.setState({
			menuAnchorEl: null,
		});
	};

	openMenu = event => {
		this.setState({
			menuAnchorEl: event.currentTarget,
		});
	};

	render() {
		return (
			<View
				background={this.props.background}
				closeMenu={this.closeMenu}
				externalStyles={this.props.externalStyles}
				id={this.props.id}
				isDocument={this.props.isDocument}
				menuAnchorEl={this.state.menuAnchorEl}
				openMenu={this.openMenu}
			/>
		);
	}
}


export default ProjectCardMenu;