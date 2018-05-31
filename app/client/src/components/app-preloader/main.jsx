import PropTypes from 'prop-types';
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import bound from 'Src/utils/bound';


const styles = theme => ({
	wrapper: {
		left: '50%',
		top: '50%',
		position: 'absolute',
		textAlign: 'center',
		transform: 'translate(-50%, -50%)',
	},
	text: {
		marginTop: 20,
	},
});


function AppPreloader({ classes }) {
	return (
		<div className={classes.wrapper}>
			<CircularProgress color="secondary" size={70} thickness={4} />
			<Typography className={classes.text} variant="display1">Загрузка</Typography>
		</div>
	);
}

AppPreloader.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(AppPreloader);