import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import HorizontalList from './horizontal-list';
import Popover from './popover';
import VerticalList from './vertical-list';


const styles = theme => ({
	iconOnly: {
		maxWidth: '48px !important',
	},
	wrapper: {
		display: 'flex',
		maxWidth: '100%',
		minWidth: 48,
	},
});


function BreadCrumbs({ anchorEl, buttonRef, classes, handleClose, handleOpen, isOpened, path }) {
	const isSingle = path.length === 1;
	const popoverProps = { anchorEl, buttonRef, handleClose, handleOpen, isOpened };

	return (
		<div className={classNames(classes.wrapper, { [classes.iconOnly]: isOpened })}>
			{!isSingle &&
				<Popover {...popoverProps}>
					<VerticalList handleLiClick={handleClose} path={path} />
				</Popover>
			}
			<HorizontalList path={path} />
		</div>
	);
}

BreadCrumbs.propTypes = {
	anchorEl: PropTypes.object,
	buttonRef: PropTypes.object.isRequired,
	classes: PropTypes.object,
	handleClose: PropTypes.func.isRequired,
	handleOpen: PropTypes.func.isRequired,
	isOpened: PropTypes.bool.isRequired,
	path: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};


export default withStyles(styles)(BreadCrumbs);