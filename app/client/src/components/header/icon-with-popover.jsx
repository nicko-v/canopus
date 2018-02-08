import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';

import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Tooltip from 'material-ui/Tooltip';

import bound from 'Src/utils/bound';


class IconWithPopover extends React.Component {
	static propTypes = {
		icon: PropTypes.func.isRequired,
		paperStyles: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	};

	constructor() {
		super();

		this.state = {
			isOpened: false,
			popoverAnchor: null,
		};

		this.popoverAnchor = null;
	}

	@bound
	openPopover() {
		this.setState({
			isOpened: true,
			popoverAnchor: findDOMNode(this.popoverAnchor),
		});
	}

	@bound
	closePopover() {
		this.setState({
			isOpened: false,
		});
	}

	render() {
		const { title, icon: Icon, paperStyles } = this.props;

		const popoverProps = {
			open: this.state.isOpened,
			anchorEl: this.state.popoverAnchor,
			onClose: this.closePopover,
			anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
			transformOrigin: { vertical: 'top', horizontal: 'right' },
			elevation: 5,
			PaperProps: { classes: { root: paperStyles } },
		};

		return (
			<div>
				<Tooltip title={title} disableTriggerFocus>
					<IconButton color="inherit" onClick={this.openPopover} ref={node => { this.popoverAnchor = node; }}>
						<Icon />
					</IconButton>
				</Tooltip>
				<Popover {...popoverProps}>
					{this.props.children}
				</Popover>
			</div>
		);
	}
}


export default IconWithPopover;