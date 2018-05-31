import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import ActionBar from './main';
import BreadCrumbs from 'Src/containers/breadcrumbs';
import Divider from './divider';
import Pusher from 'Src/components/pusher/main';
import SortProjects from 'Src/containers/sort-projects';
import SwitchProjectsLayout from 'Src/containers/switch-projects-layout';


const styles = theme => ({

});


function ProjectsActionBar({ classes }) {
	return (
		<ActionBar>
			<BreadCrumbs />
			<Pusher min="40px" />
			<SwitchProjectsLayout />
			<Divider />
			<SortProjects />
		</ActionBar>
	);
}

ProjectsActionBar.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(ProjectsActionBar);