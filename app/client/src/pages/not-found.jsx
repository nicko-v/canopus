import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import NotFoundIcon from '@material-ui/icons/Search';


const styles = theme => ({
	icon: {
		fontSize: 300,
		left: '50%',
		opacity: 0.07,
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
	},
	text: {
		zIndex: 2,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: '0 auto',
		maxWidth: 450,
		position: 'relative',
		textAlign: 'center',
	},
});

class NotFound extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
	};

	componentDidMount() {
		document.title = 'Канопус | Ошибка';
	}

	render() {
		const { classes } = this.props;

		return (
			<Fade in>
				<main className={classNames(classes.wrapper, 'noselect')}>
					<NotFoundIcon className={classes.icon} color="primary" />
					<Typography className={classes.text} color="textSecondary" paragraph variant="display1">Ресурс не&nbsp;найден</Typography>
					<Typography className={classes.text} color="textSecondary" variant="subheading">Воспользуйтесь поиском по системе или навигационным меню для перехода в&nbsp;нужный&nbsp;раздел</Typography>
				</main>
			</Fade>
		);
	}
}


export default withStyles(styles)(NotFound);