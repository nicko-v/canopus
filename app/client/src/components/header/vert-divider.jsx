import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	divider: {
		width: 0,
		position: 'relative',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '1px',
			height: '100%',
			backgroundColor: theme.palette.divider,
		},
	},
});


function VertDivider({ classes }) {
	return <div className={classes.divider} />;
}

VertDivider.propTypes = {
	classes: PropTypes.object,
};


export default withStyles(styles)(VertDivider);