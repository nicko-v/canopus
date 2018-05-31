import stringifyDate from './stringify-date';


describe('stringify-date.js', () => {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	const sec = 1000;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;

	const fwd1m = new Date(+now + min);
	const back3m = new Date(now - min * 3);
	const back1h = new Date(now - hour);
	const back2h = new Date(now - hour * 3);
	const back1d = new Date(today - 1);
	const back2d = new Date(today - day - 1);


	test('возвращает дату в формате дд-мм-гг если событие произошло в будущем', () => {
		expect(stringifyDate(fwd1m)).toMatch(/^\d{2}[\.\/-]\d{2}[\.\/-]\d{2}$/);
	});

	test('возвращает "только что" если событие произошло не более 2 минут назад', () => {
		expect(stringifyDate(now)).toBe('только что');
	});

	test('возвращает "X м. назад" если событие произошло от 2 до 60 минут назад', () => {
		expect(stringifyDate(back3m)).toMatch(/^[1-9][0-9]?\sм\.\sназад$/);
	});

	test('возвращает "час назад" если событие произошло от 1 до 1.5 часа назад', () => {
		expect(stringifyDate(back1h)).toBe('час назад');
	});

	test('возвращает "X ч. назад" если событие произошло более полутора часов назад', () => {
		expect(stringifyDate(back2h)).toMatch(/^[1-9][0-9]?\sч\.\sназад$/);
	});

	test('возвращает "вчера" если событие произошло ранее, чем начался текущий день', () => {
		expect(stringifyDate(back1d)).toBe('вчера');
	});

	test('возвращает дату в формате дд-мм-гг если событие произошло ранее, чем вчера', () => {
		expect(stringifyDate(back2d)).toMatch(/^\d{2}[\.\/-]\d{2}[\.\/-]\d{2}$/);
	});
});