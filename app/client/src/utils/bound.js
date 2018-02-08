/*
	Декоратор для методов класса. Предотвращает отклеивание this при передаче метода.
	Пример:
	class Example {
		@bound
		method1() {}

		@bound
		method2() {}
	}
*/

function bound(target, name, descriptor) {
	const reactMethods = [
		'componentDidCatch',
		'componentDidMount',
		'componentDidUpdate',
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUnmount',
		'componentWillUpdate',
		'render',
		'shouldComponentUpdate',
	];

	if (descriptor && typeof descriptor.value === 'function' && !reactMethods.includes(name)) {
		const method = descriptor.value;

		delete descriptor.value;
		delete descriptor.writable;
		descriptor.get = function () { return method.bind(this); };

		return descriptor;
	}
}


export default bound;