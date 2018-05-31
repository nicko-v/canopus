import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	wrapper: {
		...theme.mixins.gutters(),
		background: theme.palette.primary.dark,
		boxShadow: theme.shadows[2], // Подъем AppBar'a - 4, ActionBar должен быть чуть ниже.
		color: theme.palette.primary.contrastText,
		display: 'flex',
		height: theme.custom.actionBar.height,
		width: '100%',
	},
});


function ActionBar({ children, classes, justify = 'flex-start' }) {
	const style = {
		justifyContent: justify,
	};

	return (
		<div className={classes.wrapper} style={style}>
			{children}
		</div>
	);
}

ActionBar.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
	]).isRequired,
	classes: PropTypes.object,
	justify: PropTypes.string,
};


export default withStyles(styles)(ActionBar);