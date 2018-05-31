import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import bound from 'Src/utils/bound';


const styles = theme => ({
	drawerHeader: {
		...theme.mixins.toolbar,
		alignItems: 'center',
		display: 'flex',
	},
	logo: {
		fontSize: 48,
		margin: '0 8px',
	},
});


@withStyles(styles)
class DrawerHeader extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
	};

	state = {
		tooltip: '',
	};

	tooltips = [
		'Канопус — желтовато-белая звезда-сверхгигант',
		'Канопус — третья по яркости звезда на небе',
		'Канопус — ярчайшая звезда в созвездии Киля',
	];

	@bound
	generateTooltip() {
		const random = Math.floor(Math.random() * this.tooltips.length);
		const tooltip = this.tooltips[random];

		this.setState({ tooltip });
	}

	render() {
		const { classes } = this.props;
		const tooltip = this.state.tooltip;

		return (
			<div className={classes.drawerHeader + ' noselect'}>
				<Icon children="memory" className={classes.logo} color="action" />
				<Tooltip disableFocusListener disableTouchListener enterDelay={30000} onOpen={this.generateTooltip} title={tooltip}>
					<Typography variant="display1" children="Канопус" />
				</Tooltip>
			</div>
		);
	}
}


export default DrawerHeader;