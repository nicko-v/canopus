'use strict';

const port              = 8080;
const maxLogFileSize    = 1; // Мегабайты. При превышении значения содержимое лога перемещается в архив.
const logsCheckInterval = 5; // Часы. Интервал проверки размера лога. Если 0 - проверка при каждом изменении файла.
const isProduction      = process.env.NODE_ENV.startsWith('prod');
const hostname          = isProduction ? 'canopus.aem' : `127.0.0.1:${port}`;
const cookiesDomain     = isProduction ? `.${hostname}` : null; // null позволяет устанавливать куки для localhost


module.exports = {
	isProduction,
	port,
	maxLogFileSize,
	logsCheckInterval,
	hostname,
	cookiesDomain,
};