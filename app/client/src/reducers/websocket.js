import {
	REMOVE_CONNECTION,
	SAVE_CONNECTION,
} from 'Src/constants/websocket';


const initialState = {
	isConnected: false,
	connection: null,
};

const websocket = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_CONNECTION:
			return Object.assign({}, state, { isConnected: false, connection: null });

		case SAVE_CONNECTION:
			return Object.assign({}, state, { isConnected: true, connection: action.payload });

		default:
			return state;
	}
};


export default websocket;