/**
 * @apiDefine signInSuccess
 * @apiSuccess {Object} userData Данные пользователя.
 * @apiSuccess {String} userData.username Никнейм.
 * @apiSuccess {String} [userData.name] Имя.
 * @apiSuccess {String} [userData.surname] Фамилия.
 * @apiSuccess {String} [userData.patronym] Отчество.
 */

/**
 * @apiDefine signUpSuccess
 * @apiSuccess {Object} userData Данные пользователя.
 * @apiSuccess {String} userData.username Никнейм.
 */

/**
 * @apiDefine signOutSuccess
 * @apiSuccess {Boolean} success Результат.
 */

/**
 * @apiDefine signInSuccessExample1
 * @apiSuccessExample {json} Полная информация
 *   HTTP/1.1 200 OK
 *   {
 *     "username": "ivanov-ii",
 *     "name": "Иван",
 *     "surname": "Иванов",
 *     "patronym": "Иванович"
 *   }
 */

/**
 * @apiDefine signInSuccessExample2
 * @apiSuccessExample {json} Никнейм
 *   HTTP/1.1 200 OK
 *   {
 *     "username": "ivanov-ii"
 *   }
 */

/**
 * @apiDefine signUpSuccessExample
 * @apiSuccessExample {json} Никнейм
 *   HTTP/1.1 200 OK
 *   {
 *     "username": "ivanov-ii"
 *   }
 */

/**
 * @apiDefine signOutSuccessExample
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 *   {
 *     "success": true
 *   }
 */

/**
 * @apiDefine error
 * @apiError {Object} Error Ошибка.
 * @apiError {String} Error.name Имя ошибки.
 * @apiError {String} Error.message Сообщение для вывода в снэкбаре.
 */

/**
 * @apiDefine validationError
 * @apiError {Object} Error Ошибка.
 * @apiError {String} Error.name Имя ошибки.
 * @apiError {String} Error.message Сообщение для вывода в снэкбаре.
 * @apiError {String} Error.login Сообщение для вывода около поля "логин".
 * @apiError {String} Error.password Сообщение для вывода около поля "пароль".
 */

/**
 * @apiDefine validationErrorExample
 * @apiErrorExample {json} Ошибка валидации
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "name": "ValidationError",
 *     "message": "Введёные данные не соответствуют требованиям.",
 *     "login": "Недопустимые символы.",
 *     "password": "От 4 до 20 символов."
 *   }
 */

/**
 * @apiDefine signInErrorExample
 * @apiErrorExample {json} Ошибка входа
 *   HTTP/1.1 422 Unprocessable Entity
 *   {
 *     "name": "Error",
 *     "message": "Пользователь с таким именем не найден."
 *   }
 */

/**
 * @apiDefine signUpErrorExample
 * @apiErrorExample {json} Ошибка регистрации
 *   HTTP/1.1 422 Unprocessable Entity
 *   {
 *     "name": "Error",
 *     "message": "Пользователь с таким именем уже существует."
 *   }
 */

/**
 * @apiDefine signOutErrorExample
 * @apiErrorExample {json} Ошибка выхода
 *   HTTP/1.1 403 Forbidden
 *   {
 *     "name": "Error"
 *     "message": "Невозможно выполнить действие."
 *   }
 */

class Auth {
	/**
	 * @api {post} /auth/signin Вход
	 * @apiGroup Auth
	 * @apiName SignIn
	 * 
	 * @apiParam  {String} name Имя пользователя.
	 * @apiParam  {String} password Пароль.
	 * 
	 * @apiUse signInSuccess
	 * @apiUse signInSuccessExample1
	 * @apiUse signInSuccessExample2
	 * @apiUse validationError
	 * @apiUse validationErrorExample
	 * @apiUse signInErrorExample
	 */
	static signIn(name, password) {
		return new Promise((resolve, reject) => {
			resolve({ username: 'test' });
		});
	}

	/**
	 * @api {post} /auth/signup Регистрация
	 * @apiGroup Auth
	 * @apiName SignUp
	 * 
	 * @apiParam  {String} name Имя пользователя.
	 * @apiParam  {String} password Пароль.
	 * @apiParam  {String} passwordRepeat Повтор пароля.
	 * 
	 * @apiUse signUpSuccess
	 * @apiUse signUpSuccessExample
	 * @apiUse validationError
	 * @apiUse validationErrorExample
	 * @apiUse signUpErrorExample
	 */
	static signUp(name, password, passwordRepeat) {
		return new Promise((resolve, reject) => {
			resolve({ username: 'test' });
		});
	}

	/**
	 * @api {post} /auth/signout Выход
	 * @apiGroup Auth
	 * @apiName SignOut
	 * 
	 * @apiUse signOutSuccess
	 * @apiUse signOutSuccessExample
	 * @apiUse error
	 * @apiUse signOutErrorExample
	 */
	static signOut() {
		return new Promise((resolve, reject) => {
			resolve({});
		});
	}

	/**
	 * @api {post} /auth/restore Восстановление сессии
	 * @apiGroup Auth
	 * @apiName SessionRestore
	 * 
	 * @apiUse signInSuccess
	 * @apiUse signInSuccessExample1
	 * @apiUse signInSuccessExample2
	 * @apiUse error
	 */
	static restoreSession() {
		return new Promise((resolve, reject) => {
			resolve({ username: 'test' });
		});
	}
}


export default Auth;