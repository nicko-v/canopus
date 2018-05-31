import PropTypes from 'prop-types';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LogoIcon from './icon';


function Logo({ classes }) {
	return (
		<Grid container direction="column" className="noselect">
			<Grid container alignItems="center" justify="space-around">
				<Grid item component={LogoIcon} />
				<Grid item component={Typography} variant="display3" align="center" color="textSecondary">КАНОПУС</Grid>
			</Grid>
			<Grid item component={Typography} variant="body1" align="center" color="textSecondary">Система контроля документов и&nbsp;отслеживания&nbsp;ошибок</Grid>
		</Grid>
	);
}

Logo.propTypes = {
	classes: PropTypes.object,
};


export default Logo;