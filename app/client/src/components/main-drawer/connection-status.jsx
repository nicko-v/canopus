import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';


const styles = theme => ({
	wrapper: {
		height: theme.custom.actionBar.height,
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderTop: `1px solid ${theme.palette.divider}`,
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	online: {
		color: green[500],
		display: 'inline',
	},
	offline: {
		color: red[500],
		display: 'inline',
	},
});


function ConnectionStatus({ classes, isConnected }) {
	return (
		<div className={classes.wrapper + ' noselect'}>
			<Typography
				align="center"
				children="соединение с сервером"
				variant="caption" />
			<Tooltip title={isConnected ? 'Новые данные поступают самостоятельно' : 'Новые данные не поступают'}>
				<Typography
					align="center"
					children={isConnected ? 'активно' : 'потеряно'}
					className={isConnected ? classes.online : classes.offline}
					variant="caption" />
			</Tooltip>
		</div>
	);
}

ConnectionStatus.propTypes = {
	classes: PropTypes.object,
	isConnected: PropTypes.bool.isRequired,
};


export default withStyles(styles)(ConnectionStatus);