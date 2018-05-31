function sortProjects(order) {
	// TODO Возможно при сортировке стоит группировать файлы по типу (расширению) при одинаковом номере для красоты (что бы не перемешивались цвета).
	function byNumber(a, b) {
		if (a.isDocument !== b.isDocument) {
			return a.isDocument ? 1 : -1;
		} else {
			return a.number.localeCompare(b.number, [], { numeric: true, sensitivity: 'accent' });
		}
	}
	function byName(a, b) {
		if (a.isDocument !== b.isDocument) {
			return a.isDocument ? 1 : -1;
		} else {
			return a.name.localeCompare(b.name, [], { numeric: true, sensitivity: 'accent' });
		}
	}
	function byDate(a, b) {
		if (a.isDocument !== b.isDocument) {
			return a.isDocument ? 1 : -1;
		} else {
			return a.modifiedDate > b.modifiedDate ? 1 : -1;
		}
	}

	switch (order) {
		case 'number':
			return byNumber;
		case 'name':
			return byName;
		case 'date':
			return byDate;
		default:
			return byName;
	}
}


export default sortProjects;