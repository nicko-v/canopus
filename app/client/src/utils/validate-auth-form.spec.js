import validate from './validate-auth-form';


describe('validate-auth-form.js', () => {
	describe('Логин', () => {
		test('должен содержать только буквы, цифры, дефис и подчеркивание', () => {
			expect(() => validate('aBc012-_', 'zzzz')).not.toThrow();
			expect(() => validate('a bД+"/', 'zzzz')).toThrow();
		});

		test('должен быть от 3 до 10 символов', () => {
			expect(() => validate('ab', 'zzzz')).toThrow();
			expect(() => validate('abc-def-ghi', 'zzzz')).toThrow();
			expect(() => validate('abc', 'zzzz')).not.toThrow();
		});
	});

	describe('Пароль', () => {
		it('может содержать буквы, цифры, символы: !@#$%^&*()[]{}+-=\\|/\'";:,.<>~', () => {
			expect(() => validate('abc', 'aBc 0')).toThrow();
			expect(() => validate('abc', 'aBc012-_!@#~')).not.toThrow();
		});

		test('должен быть от 4 до 20 символов', () => {
			expect(() => validate('abc', 'abc')).toThrow();
			expect(() => validate('abc', 'abc-def-ghi-jkl-mno-pqr')).toThrow();
		});
	});

	describe('Повтор пароля', () => {
		test('должен совпадать с паролем', () => {
			expect(() => validate('abc', 'abcd', 'abc')).toThrow();
			expect(() => validate('abc', 'abcd', '')).toThrow();
			expect(() => validate('abc', 'abcd', 'abcd')).not.toThrow();
		});
	});
});