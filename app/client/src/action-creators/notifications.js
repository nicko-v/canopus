import { ADD_NOTIFICATION } from 'Src/constants/notifications';


class Notifications {
	static addNotification(notification) {
		return {
			type: ADD_NOTIFICATION,
			payload: notification,
		};
	}
}


export default Notifications;