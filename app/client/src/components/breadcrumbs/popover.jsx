import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import PathIcon from '@material-ui/icons/LinearScale';


const styles = theme => ({
	wrapper: {
		alignItems: 'center',
		display: 'flex',
	},
});


function BreadcrumbsPopover({ anchorEl, buttonRef, children, classes, handleClose, handleOpen, isOpened }) {
	const popoverProps = {
		anchorEl,
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},
		onClose: handleClose,
		open: isOpened,
	};

	return (
		<div className={classes.wrapper}>
			<Tooltip title="Навигация">
				<IconButton color="inherit" onClick={handleOpen} ref={buttonRef}>
					<PathIcon />
				</IconButton>
			</Tooltip>
			<Popover {...popoverProps}>
				{children}
			</Popover>
		</div>
	);
}

BreadcrumbsPopover.propTypes = {
	anchorEl: PropTypes.object,
	buttonRef: PropTypes.object.isRequired,
	classes: PropTypes.object,
	handleClose: PropTypes.func.isRequired,
	handleOpen: PropTypes.func.isRequired,
	isOpened: PropTypes.bool.isRequired,
};


export default withStyles(styles)(BreadcrumbsPopover);