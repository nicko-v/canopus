import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


function SignUpForm({ classes, onSubmit, onInputChange, login, password, passwordRepeat, loginError, passwordError }) {
	const loginProps = {
		id: 'su_login',
		label: 'Логин',
		value: login,
		onChange: onInputChange('login'),
		placeholder: 'A-z, 0-9, -, _',
		helperText: loginError,
		error: Boolean(loginError),
		margin: 'normal',
		fullWidth: true,
		autoComplete: 'off',
	};
	const passwordProps = {
		id: 'su_password',
		label: 'Пароль',
		value: password,
		onChange: onInputChange('password'),
		helperText: passwordError,
		error: Boolean(passwordError),
		margin: 'normal',
		type: 'password',
		autoComplete: 'new-password',
		className: classes.textFieldHalf,
	};
	const passwordRepeatProps = {
		id: 'su_password2',
		label: 'Пароль ещё раз',
		value: passwordRepeat,
		onChange: onInputChange('passwordRepeat'),
		error: Boolean(passwordError),
		margin: 'normal',
		type: 'password',
		autoComplete: 'new-password',
		className: classes.textFieldHalf,
	};

	return (
		<form className={classes.form} onSubmit={onSubmit} noValidate>
			<TextField {...loginProps} />
			<TextField {...passwordProps} />
			<TextField {...passwordRepeatProps} />
			<Button className={classes.button} variant="raised" color="secondary" type="submit">Подтвердить</Button>
		</form>
	);
}

SignUpForm.propTypes = {
	classes: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	login: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	passwordRepeat: PropTypes.string.isRequired,
	loginError: PropTypes.string,
	passwordError: PropTypes.string,
};


export default SignUpForm;