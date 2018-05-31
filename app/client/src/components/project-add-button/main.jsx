import PropTypes from 'prop-types';
import React from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { withStyles } from '@material-ui/core/styles';

import FileIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';


const styles = theme => ({

});


function ProjectAddButton({ classes, externalStyles, handleOpen, handleClose, handleClick, handleClickAction, isOpen, }) {
	let isTouch;

	if (typeof document !== 'undefined') {
		isTouch = 'ontouchstart' in document.documentElement;
	}


	return (
		<SpeedDial
			ariaLabel="Добавить"
			ButtonProps={{ color: 'secondary' }}
			className={externalStyles}
			icon={<SpeedDialIcon />}
			onBlur={handleClose}
			onClick={handleClick}
			onClose={handleClose}
			onFocus={isTouch ? undefined : handleOpen}
			onMouseEnter={isTouch ? undefined : handleOpen}
			onMouseLeave={handleClose}
			open={isOpen}
		>
			<SpeedDialAction
				icon={<FileIcon />}
				onClick={() => handleClickAction('document')}
				tooltipTitle="Документ"
			/>
			<SpeedDialAction
				icon={<FolderIcon />}
				onClick={() => handleClickAction('directory')}
				tooltipTitle="Каталог"
			/>
		</SpeedDial>
	);
}

ProjectAddButton.propTypes = {
	classes: PropTypes.object,
	externalStyles: PropTypes.string,
	handleClose: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	handleClickAction: PropTypes.func.isRequired,
	handleOpen: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};


export default withStyles(styles)(ProjectAddButton);