import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import AddVersionIcon from '@material-ui/icons/LibraryAdd';
import CreateMapIcon from '@material-ui/icons/DeviceHub';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import MoreIcon from '@material-ui/icons/MoreHoriz';


const styles = theme => ({

});


function CardHeaderMenu({ background, classes, closeMenu, externalStyles, id, isDocument, menuAnchorEl, openMenu }) {
	const menuProps = {
		anchorEl: menuAnchorEl,
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'right',
		},
		MenuListProps: {
			dense: true,
			style: background ? { background: background.paper } : undefined,
		},
		open: Boolean(menuAnchorEl),
		onClose: closeMenu,
		transformOrigin: {
			vertical: 'top',
			horizontal: 'right',
		},
	};

	return (
		<div className={externalStyles}>
			<IconButton focusRipple={false} onClick={openMenu}>
				<MoreIcon />
			</IconButton>
			<Menu {...menuProps}>
				{!isDocument &&
					<MenuItem component={Link} onClick={closeMenu} to={`/projects/${id}/map`}>
						<ListItemIcon><CreateMapIcon /></ListItemIcon>
						<ListItemText primary="Карта блока" />
					</MenuItem>
				}
				<MenuItem component={Link} divider onClick={closeMenu} to={`/projects/${id}/history`}>
					<ListItemIcon><HistoryIcon /></ListItemIcon>
					<ListItemText primary="История изменений" />
				</MenuItem>
				{isDocument &&
					<MenuItem component={Link} onClick={closeMenu} to={`/files/${id}`}>
						<ListItemIcon><DownloadIcon /></ListItemIcon>
						<ListItemText primary="Скачать" />
					</MenuItem>
				}
				{isDocument &&
					<MenuItem onClick={closeMenu}>
						<ListItemIcon><AddVersionIcon /></ListItemIcon>
						<ListItemText primary="Добавить версию" />
					</MenuItem>
				}
				<MenuItem onClick={closeMenu}>
					<ListItemIcon><EditIcon /></ListItemIcon>
					<ListItemText primary="Редактировать" />
				</MenuItem>
			</Menu>
		</div>
	);
}

CardHeaderMenu.propTypes = {
	background: PropTypes.shape({
		paper: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object,
	closeMenu: PropTypes.func.isRequired,
	externalStyles: PropTypes.string,
	id: PropTypes.number.isRequired,
	isDocument: PropTypes.bool.isRequired,
	menuAnchorEl: PropTypes.object,
	openMenu: PropTypes.func.isRequired,
};


export default withStyles(styles)(CardHeaderMenu);