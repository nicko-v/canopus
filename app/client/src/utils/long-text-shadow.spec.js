import lts from './long-text-shadow';


describe('long-text-shadow.js', () => {
	test('создает запрошенное количество теней', () => {
		const shadows = lts('#000', 5).split(', ');

		expect(shadows).toHaveLength(5);
	});

	test('каждая тень смещена на 1px вправо и 1px вниз', () => {
		const shadows = lts('#000', 5).split(', ');
		let x = 1, y = 1; // Сдвиг теней начинается с 1px.
		const isEachShadowHasProgressiveXOffset = shadows.every(shadow => parseInt(shadow.split(' ')[0]) === x++);
		const isEachShadowHasProgressiveYOffset = shadows.every(shadow => parseInt(shadow.split(' ')[1]) === y++);

		expect(isEachShadowHasProgressiveXOffset).toBeTruthy();
		expect(isEachShadowHasProgressiveYOffset).toBeTruthy();
	});

	test('создает 10 черных теней если не переданы параметры', () => {
		const shadows = lts().split(', ');
		const shadow = shadows[0];

		expect(shadows).toHaveLength(10);
		expect(shadow).toMatch('1px 1px #000');
	});
});