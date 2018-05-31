import { ADD_NOTIFICATION } from 'Src/constants/notifications';


const initialState = {
	unreadCount: 0,
};

const notifications = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return Object.assign({}, state, {
				unreadCount: state.unreadCount + 1
			});

		default:
			return state;
	}
};


export default notifications;