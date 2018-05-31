var WebSocket = new require('ws');
var wsServer = new WebSocket.Server({ port: 8081 });
var clients = {};

wsServer.on('connection', ws => {
	function time() {
		return new Date().toISOString().slice(11, -5);
	}

	var id = Math.random();
	clients[id] = ws;

	console.log(`${time()}  |  Новый клиент: ${id}.\n          |  Активные клиенты: [${Object.keys(clients).join(', ')}].\n`);

	ws.on('message', msg => {
		console.log(`${time()}  |  Клиент ${id}: ${msg}\n          |  Активные клиенты: [${Object.keys(clients).join(', ')}].\n`);
		for (var c in clients) {
			clients[c].send(`Получено сообщение: ${msg}`);
		}
	});

	ws.on('close', () => {
		delete clients[id];
		console.log(`${time()}  |  Клиент ${id} отключился.\n          |  Активные клиенты: [${Object.keys(clients).join(', ')}].\n`);
	});

	ws.on('error', (error) => {
		console.log(`${time()}  |  Ошибка: ${error.message}\n`);
	});
});