import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import DashboardIcon from '@material-ui/icons/Dashboard';
import IssuesIcon from '@material-ui/icons/BugReport';
import ProjectsIcon from '@material-ui/icons/LibraryBooks';


const styles = theme => ({

});


function MenuList({ classes }) {
	return (
		<List component="nav" dense>
			<ListItem button component={Link} to="/">
				<ListItemIcon><DashboardIcon /></ListItemIcon>
				<ListItemText primary="Панель управления" />
			</ListItem>
			<ListItem button component={Link} to="/projects">
				<ListItemIcon><ProjectsIcon /></ListItemIcon>
				<ListItemText primary="Проекты" />
			</ListItem>
			<ListItem button component={Link} to="/issues">
				<ListItemIcon><IssuesIcon /></ListItemIcon>
				<ListItemText primary="Проблемы" />
			</ListItem>
		</List>
	);
}

MenuList.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(MenuList);