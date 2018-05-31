class ValidationError {
	constructor({ login, password }) {
		this.name = 'ValidationError';
		this.message = 'Введённые данные не соответствуют требованиям.';
		this.login = login;
		this.password = password;
	}
}

function validateForm(login, password, passwordRepeat) {
	const loginMinLength = 3;
	const loginMaxLength = 10;
	const passwordMinLength = 4;
	const passwordMaxLength = 20;

	const loginRegExp = new RegExp('^[\\w-]+$');
	const passwordRegExp = new RegExp(`^[\\w\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\[\\]\\{\\}\\+\\-\\=\\\\\|\\/\\'\\"\\;\\:\\,\\.\\<\\>\\~\\\`]+$`);

	const messages = { login: '', password: '' };


	if (login.length < loginMinLength || login.length > loginMaxLength) {
		messages.login = `От ${loginMinLength} до ${loginMaxLength} символов`;
	} else if (!loginRegExp.test(login)) {
		messages.login = 'Недопустимые символы';
	}

	if (password.length < passwordMinLength || password.length > passwordMaxLength) {
		messages.password = `От ${passwordMinLength} до ${passwordMaxLength} символов`;
	} else if (!passwordRegExp.test(password)) {
		messages.password = 'Недопустимые символы';
	} else if (passwordRepeat !== undefined && password !== passwordRepeat) { // Если undefined, значит проверку запросила форма входа, иначе - регистрации.
		messages.password = 'Пароли не совпадают';
	}

	if (messages.login || messages.password) {
		throw new ValidationError(messages);
	}


	return true;
}


export default validateForm;