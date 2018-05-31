import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	divider: {
		...theme.mixins.gutters(),
		paddingTop: 8,
		paddingBottom: 8,
		'&::before': {
			background: theme.palette.primary.midDark,
			content: '""',
			display: 'block',
			height: '100%',
			width: 2,
		},
	},
});


function Divider({ classes }) {
	return <div className={classes.divider} />;
}

Divider.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(Divider);