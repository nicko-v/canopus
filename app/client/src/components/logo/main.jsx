import PropTypes from 'prop-types';
import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import LogoIcon from './icon';


function Logo({ classes }) {
	return (
		<Grid container direction="column" spacing={0} className="noselect">
			<Grid container alignItems="center" justify="space-around" spacing={0}>
				<Grid item component={LogoIcon} />
				<Grid item component={Typography} variant="display3" align="center" color="textSecondary">КАНОПУС</Grid>
			</Grid>
			<Grid item component={Typography} variant="body1" align="center" color="textSecondary">Система контроля документов и отслеживания ошибок</Grid>
		</Grid>
	);
}


export default Logo;