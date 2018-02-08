import bound from './bound';


class Test {
	constructor() {
		this.isRightContext = true;
	}

	isBound() {
		try {
			return this.isRightContext;
		} catch (error) {
			return false;
		}
	}
}


describe('bound.js', () => {
	test('в обычном случае должен теряться контекст при передаче метода', () => {
		const test = new Test();
		const method = test.isBound;

		expect(test.isBound()).toBeTruthy();
		expect(method()).toBeFalsy();
	});

	test('после применения функции должен сохраняться контекст при передаче метода', () => {
		const test = new Test();
		const basicDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(test), 'isBound');
		const customDescriptor = bound(test, 'isBound', basicDescriptor);

		Object.defineProperty(test, 'isBound', customDescriptor);
		const method = test.isBound;

		expect(test.isBound()).toBeTruthy();
		expect(method()).toBeTruthy();
	});

	test('функция ничего не возвращает если передан один из методов Реакта', () => {
		const test = new Test();
		const basicDescriptor = { value() { } };
		const customDescriptor = bound(test, 'componentDidMount', basicDescriptor);

		expect(customDescriptor).toBeUndefined();
	});
});