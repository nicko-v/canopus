import { mock_project } from 'Src/mock/index';


/**
 * @apiDefine loadProjectSuccess
 * @apiSuccess {Object} projectData Данные проекта.
 * @apiSuccess {Number} projectData.id ID проекта.
 * @apiSuccess {Boolean} projectData.isDocument Документ или директория.
 * @apiSuccess {Number} projectData.issues Количество проблем.
 * @apiSuccess {String} projectData.modifiedDate Дата последнего изменения.
 * @apiSuccess {Number} projectData.modifiedId ID последнего изменения.
 * @apiSuccess {String} projectData.name Имя проекта.
 * @apiSuccess {String} projectData.number Номер проекта.
 * @apiSuccess {Object[]} projectData.path Путь до проекта.
 * @apiSuccess {Object[]} projectData.childs Дочерние проекты. Массив объектов такой же структуры. Только для директорий.
 * @apiSuccess {String} [projectData.order] Номер заказа. Только для директорий.
 * @apiSuccess {Number} projectData.branches Варианты. Только для документов.
 * @apiSuccess {Number} projectData.developer Разработчик. Только для документов.
 * @apiSuccess {Number} projectData.extension Расширение файла. Только для документов.
 */

/**
 * @apiDefine loadProjectSuccessExample_Dir
 * @apiSuccessExample {json} Директория
 *   HTTP/1.1 200 OK
 *   {
 *     "id": 2,
 *     "isDocument": false,
 *     "issues": 5,
 *     "modifiedDate": "2018-12-31T00:00:00.000Z",
 *     "modifiedId": 10,
 *     "name": "Блок Б",
 *     "number": "АБВГ.123456.789 СБ",
 *     "path": [
 *       { "name": "Блок А", "id": 1 },
 *       { "name": "Блок Б", "id": 2 }
 *     ],
 *     "childs": [{}, {}, {}],
 *     "order": "1-234-56"
 *   }
 */

/**
 * @apiDefine loadProjectSuccessExample_Doc
 * @apiSuccessExample {json} Документ
 *   HTTP/1.1 200 OK
 *   {
 *     "id": 2,
 *     "isDocument": true,
 *     "issues": 5,
 *     "modifiedDate": "2018-12-31T00:00:00.000Z",
 *     "modifiedId": 10,
 *     "name": "Блок Б",
 *     "number": "АБВГ.123456.789 СБ",
 *     "path": [
 *       { "name": "Блок А", "id": 1 },
 *       { "name": "Блок Б", "id": 2 }
 *     ],
 *     "branches": 2,
 *     "developer": "Иванов",
 *     "extension": "dwg"
 *   }
 */

/**
 * @apiDefine error
 * @apiError {Object} Error Ошибка.
 * @apiError {String} Error.name Имя ошибки.
 * @apiError {String} Error.message Сообщение.
 */

/**
 * @apiDefine errorExample
 * @apiErrorExample {json} Не найдено
 *   HTTP/1.1 404 Not Found
 *   {
 *     "name": "Error",
 *     "message": "Запрошенный проект не найден.",
 *   }
 */


class Project {
	/**
	 * @api {get} /projects/:id Проект
	 * @apiGroup Project
	 * @apiName LoadProject
	 * 
	 * @apiUse loadProjectSuccess
	 * @apiUse loadProjectSuccessExample_Dir
	 * @apiUse loadProjectSuccessExample_Doc
	 * @apiUse error
	 * @apiUse errorExample
	 */
	static loadProject(id) {
		return new Promise((resolve, reject) => {
			if (DEV_ENV) { const data = mock_project[id]; data ? resolve(data) : reject(new Error('Не удалось загрузить проект')); return; }

			reject({});
		});
	}

	static addProject({ mode, developer, name, number, order }) {
		return new Promise((resolve, reject) => {
			if (DEV_ENV) { const projectData = mock_project.createEntry({ mode, developer, name, number, order }); resolve(projectData); return; }

			reject({});
		});
	}
}


export default Project;