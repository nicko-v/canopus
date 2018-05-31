import PropTypes from 'prop-types';
import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import ConnectionStatus from 'Src/containers/connection-status';
import Header from './header';
import MenuList from './menu-list';


const styles = theme => ({
	button: {
		textTransform: 'unset',
	},
	drawerPaper: {
		background: theme.custom.appDrawer.background,
		overflowX: 'hidden',
		width: theme.custom.appDrawer.width,
		paddingBottom: 40, // Высота фиксированной плашки с номером версии.
	},
	version: {
		alignItems: 'center',
		background: theme.custom.appDrawer.background, // Не прозрачный, т.к. иначе при прокрутке списка пункты меню некрасиво перекрываются текстом плашки с версией.
		bottom: 0,
		display: 'flex',
		height: 40, // Меняется с paddingBottom у drawerPaper.
		justifyContent: 'center',
		left: 0,
		position: 'fixed',
		width: theme.custom.appDrawer.width - 1, // Минус рамка, что бы не перекрывало.
	},
});


function MainDrawer({ classes, hideDrawer, isActive, theme, width }) {
	const isPermanent = theme.breakpoints.width(width) >= theme.breakpoints.width(theme.custom.appDrawer.breakpoint);
	const permProps = {
		variant: 'permanent',
	};
	const tempProps = {
		ModalProps: {
			keepMounted: true,
		},
		onClose: hideDrawer,
		open: isActive,
		variant: 'temporary',
	};
	const drawerProps = isPermanent ? permProps : tempProps;

	// TODO: Вывод списка изменений в текущей версии.
	return (
		<Drawer {...drawerProps} classes={{ paper: classes.drawerPaper }}>
			<Header />
			<ConnectionStatus />
			<MenuList />
			<div className={classes.version}>
				<Button className={classes.button} disabled size="small">{'v' + APP_VER}</Button>
			</div>
		</Drawer>
	);
}

MainDrawer.propTypes = {
	classes: PropTypes.object,
	isActive: PropTypes.bool.isRequired,
	theme: PropTypes.object.isRequired,
	hideDrawer: PropTypes.func.isRequired,
	width: PropTypes.string.isRequired,
};


export default withWidth()(withStyles(styles, { withTheme: true })(MainDrawer));