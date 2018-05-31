import {
	CLOSE_PREVIOUS_CONNECTION,
	REMOVE_CONNECTION,
	SAVE_CONNECTION,
} from 'Src/constants/websocket';


class WS {
	static closePreviousConnection() {
		return {
			type: CLOSE_PREVIOUS_CONNECTION,
			payload: null,
		};
	}

	static removeConnection() {
		return {
			type: REMOVE_CONNECTION,
			payload: null,
		};
	}

	static saveConnection(connection) {
		return {
			type: SAVE_CONNECTION,
			payload: connection,
		};
	}
}


export default WS;