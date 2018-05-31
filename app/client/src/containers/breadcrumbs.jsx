import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/breadcrumbs/main';


const mapStateToProps = state => ({
	path: state.project.path,
});


@connect(mapStateToProps)
class BreadCrumbs extends React.Component {
	static propTypes = {
		path: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
			})
		),
	};

	state = {
		anchorEl: null,
		isOpened: false,
	};

	buttonRef = React.createRef();

	closePopover = () => {
		this.setState({
			isOpened: false,
		});
	}

	openPopover = () => {
		this.setState({
			anchorEl: findDOMNode(this.buttonRef.current),
			isOpened: true,
		});
	}

	render() {
		let { path } = this.props;

		if (path && path.length) {
			const handledPath = path.map(element => (
				{
					link: '/projects/' + (element.id || ''), // Для красоты адреса. Скрывает id 0 у корневого каталога.
					name: element.name,
				}
			));

			const viewProps = {
				anchorEl: this.state.anchorEl,
				buttonRef: this.buttonRef,
				handleClose: this.closePopover,
				handleOpen: this.openPopover,
				isOpened: this.state.isOpened,
				path: handledPath,
			};

			return <View {...viewProps} />;
		} else {
			return null;
		}
	}
}


export default BreadCrumbs;