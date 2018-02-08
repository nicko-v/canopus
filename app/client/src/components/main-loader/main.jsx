import PropTypes from 'prop-types';
import React from 'react';


import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';


const styles = {
	progress: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 99999,
	},
};


function MainLoader({ classes }) {
	return <LinearProgress color="secondary" className={classes.progress} />;
}

MainLoader.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainLoader);