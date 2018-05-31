import PropTypes from 'prop-types';
import React from 'react';

import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';

import Logo from 'Src/components/logo/main';
import SignInForm from 'Src/components/auth/main';


const styles = theme => ({
	logo: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		animationName: 'logoSlideUp',
		animationDuration: '700ms',
		animationTimingFunction: 'ease-out',
		animationDelay: '1600ms',
		animationFillMode: 'forwards',
	},
	form: {
		padding: '0 20px',
		width: '100%',
		maxWidth: '400px',
		position: 'absolute',
		top: '250px',
		left: '50%',
		transform: 'translateX(-50%)',
		opacity: 0,
		animationName: 'formFadeIn',
		animationDuration: '500ms',
		animationTimingFunction: 'ease-in',
		animationDelay: '2500ms',
		animationFillMode: 'forwards',
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.up(theme.custom.appDrawer.breakpoint)]: {
			marginLeft: theme.custom.appDrawer.width / 2 * -1,
		},
	},
	'@keyframes logoSlideUp': {
		to: {
			top: 120,
		},
	},
	'@keyframes formFadeIn': {
		to: {
			opacity: 1,
		},
	},
});


class Auth extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
	};

	componentDidMount() {
		document.title = 'Канопус';
	}

	render() {
		const { classes } = this.props;

		return (
			<Fade in>
				<main className={classes.wrapper}>
					<div className={classes.logo}>
						<Logo />
					</div>
					<div className={classes.form}>
						<SignInForm />
					</div>
				</main>
			</Fade>
		);
	}
}


export default withStyles(styles)(Auth);