import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	hidden: {
		display: 'none',
	},
	progress: {
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: 9999,
	},
});


function MainLoader({ classes, isActive }) {
	const className = classNames(classes.progress, { [classes.hidden]: !isActive });

	return <LinearProgress color="secondary" className={className} />;
}

MainLoader.propTypes = {
	classes: PropTypes.object,
	isActive: PropTypes.bool.isRequired,
};


export default withStyles(styles)(MainLoader);