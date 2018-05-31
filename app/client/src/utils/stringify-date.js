function stringifyDate(date) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const fromDayStart = now - today;
	const fromModification = now - date;

	const sec = 1000;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;


	if (fromModification > fromDayStart + day) {
		return date.toLocaleString('ru', {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit',
		});
	}

	if (fromModification > fromDayStart) {
		return 'вчера';
	}

	if (fromModification >= hour * 1.5) {
		return Math.round(fromModification / hour) + ' ч. назад';
	}

	if (fromModification >= hour) {
		return 'час назад';
	}

	if (fromModification >= min * 2) {
		return Math.round(fromModification / min) + ' м. назад';
	}

	if (fromModification >= 0) {
		return 'только что';
	}

	return date.toLocaleString('ru', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	});
}


export default stringifyDate;