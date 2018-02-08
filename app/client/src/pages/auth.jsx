import React from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Logo from 'Src/components/logo/main';
import SignInForm from 'Src/components/auth/main';


const styles = {
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
};


function Auth({ classes }) { // TODO: Анимация должна быть на паузе пока не придет ответ о восстановлении сессии.
	return (
		<Grid container direction="column" alignItems="center" spacing={0}>
			<Grid item className={classes.logo}>
				<Logo />
			</Grid>
			<Grid item className={classes.form}>
				<SignInForm />
			</Grid>
		</Grid>
	);
}


export default withStyles(styles)(Auth);