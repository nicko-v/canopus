import PropTypes from 'prop-types';
import React from 'react';

import Notifications from 'material-ui-icons/Notifications';
import { withStyles } from 'material-ui/styles';

import bound from 'Src/utils/bound';

import IconWithPopover from './icon-with-popover';


const styles = {
	paper: {
		width: '300px',
	},
};


@withStyles(styles)
class NotificationsButton extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
	};

	render() {
		const { classes } = this.props;

		return (
			<IconWithPopover title="Уведомления" icon={Notifications} paperStyles={classes.paper}>

			</IconWithPopover>
		);
	}
}


export default NotificationsButton;