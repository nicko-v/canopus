import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import NotificationsIcon from '@material-ui/icons/Notifications';


const styles = theme => ({

});


function NotificationsButton({ classes }) {
	return (
		<Tooltip title="Уведомления">
			<IconButton color="inherit">
				<NotificationsIcon />
			</IconButton>
		</Tooltip>
	);
}


NotificationsButton.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles)(NotificationsButton);