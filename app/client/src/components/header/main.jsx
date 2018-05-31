import PropTypes from 'prop-types';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ToolBar from '@material-ui/core/ToolBar';
import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import AccountButton from './account-button';
import NotificationsButton from './notifications-button';
import ProjectsActionBar from 'Src/components/action-bar/projects-action-bar';
import Pusher from 'Src/components/pusher/main';
import Search from 'Src/containers/search';
import SectionTitle from './section-title';


const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	divider: {
		flexGrow: 1,
	},
	fixed: {
		position: 'fixed',
		top: 0,
		right: 0,
		width: '100%',
		[theme.breakpoints.up(theme.custom.appDrawer.breakpoint)]: {
			width: `calc(100% - ${theme.custom.appDrawer.width}px)`,
		},
	},
	menuButton: {
		[theme.breakpoints.up(theme.custom.appDrawer.breakpoint)]: {
			display: 'none',
		},
	},
	wrapper: {
		...theme.mixins.toolbar,
		position: 'relative',
		zIndex: theme.zIndex.appBar,
	},
});


function Header({ classes, location, showDrawer, theme }) {
	/*
		Имеется шапка с position: fixed, высота которой зависит от двух внутренних блоков: toolbar и actionbar,
		первый меняет высоту от разрешения, а второй показывается не на всех страницах.

		Требуется задать обертке шапки правильную высоту что бы следующий за ней блок не налезал.

		Лучшее, что удалось придумать - задать обертке класс с height, взятой со всеми медиа-правилами у toolbar
		и инлайновый margin-bottom, равный высоте actionbar, применяющийся только по определенным путям.
	*/
	const path = location.pathname.toLowerCase();
	const isActionsBarActive = ['/projects'].some(element => path.startsWith(element));
	const wrapper = isActionsBarActive ? { marginBottom: theme.custom.actionBar.height } : {};
	/* -=-=-=- */

	return (
		<div className={classes.wrapper} style={wrapper}>
			<div className={classes.fixed}>
				<AppBar className={classes.appBar}>
					<ToolBar>
						<IconButton className={classes.menuButton} color="inherit" onClick={showDrawer}>
							<MenuIcon />
						</IconButton>
						<Hidden smDown>
							<SectionTitle />
						</Hidden>
						<Pusher />
						<Search />
						<NotificationsButton />
						<AccountButton />
					</ToolBar>
				</AppBar>
				<Route path="/projects" component={ProjectsActionBar} />
			</div>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object,
	location: PropTypes.object.isRequired,
	showDrawer: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles, { withTheme: true })(Header));