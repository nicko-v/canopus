import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function SignInForm({ classes, onSubmit, onInputChange, login, password, loginError, passwordError }) {
	const loginProps = {
		id: 'si_login',
		label: 'Логин',
		value: login,
		onChange: onInputChange('login'),
		helperText: loginError,
		error: Boolean(loginError),
		margin: 'normal',
		fullWidth: true,
		autoComplete: 'off',
	};
	const passwordProps = {
		id: 'si_password',
		label: 'Пароль',
		value: password,
		onChange: onInputChange('password'),
		helperText: passwordError,
		error: Boolean(passwordError),
		margin: 'normal',
		type: 'password',
		fullWidth: true,
		autoComplete: 'current-password',
	};

	return (
		<form className={classes.form} onSubmit={onSubmit} noValidate>
			<TextField {...loginProps} />
			<TextField {...passwordProps} />
			<Button className={classes.button} variant="raised" color="secondary" type="submit">Войти</Button>
		</form>
	);
}

SignInForm.propTypes = {
	classes: PropTypes.object,
	onSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	login: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	loginError: PropTypes.string,
	passwordError: PropTypes.string,
};


export default SignInForm;