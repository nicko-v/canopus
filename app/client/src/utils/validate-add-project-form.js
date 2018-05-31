class ValidationError {
	constructor({ developer, name, number, order }) {
		this.name = 'ValidationError';
		this.message = 'Введённые данные не соответствуют требованиям.';
		this.developer = developer;
		this.name = name;
		this.number = number;
		this.order = order;
	}
}

function validateAddProjecForm({ mode, developer, name, number, order }) {
	const isDocumentMode = mode === 'document';
	const messages = {
		developer: '',
		name: '',
		number: '',
		order: '',
	};

	if (isDocumentMode && developer.length === 0) {
		messages.developer = 'Необходимо указать разработчика';
	}

	if (name.length === 0) {
		messages.name = 'Необходимо указать название';
	}

	if (number.length === 0) {
		messages.number = 'Необходимо указать номер'
	}


	if (Object.values(messages).join('')) {
		throw new ValidationError(messages);
	}

	return true;
}


export default validateAddProjecForm;