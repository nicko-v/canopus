import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	title: {
		paddingRight: '16px',
	},
});


function SectionTitle({ classes }) {
	const titleProps = {
		className: classes.title + ' noselect',
		color: 'inherit',
		noWrap: true,
		variant: 'title',
	};

	return (
		<Switch>
			<Route exact path="/" render={() => <Typography {...titleProps} children="Панель управления" />} />
			<Route path="/projects" render={() => <Typography {...titleProps} children="Проекты" />} />
			<Route path="/issues" render={() => <Typography {...titleProps} children="Проблемы" />} />
		</Switch>
	);
}

SectionTitle.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(SectionTitle);