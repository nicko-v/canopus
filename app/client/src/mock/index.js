const mock_projects = {
	0: {
		childs: [],
		id: 0,
		isDocument: false,
	},
	1: {
		childs: [],
		id: 1,
		isDocument: false,
		issues: 3,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 88,
		name: 'Блок БУТК',
		number: 'УЯИС.453789.125',
		order: '4-785-12',
		path: [],
	},
	2: {
		childs: [],
		id: 2,
		isDocument: false,
		issues: 0,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 77,
		name: 'Блок управления и контроля',
		number: 'УЯИС.755641.654',
		path: [],
	},
	3: {
		childs: [],
		id: 3,
		isDocument: false,
		issues: 9,
		modifiedDate: new Date(Date.now() - 60 * 60 * 1000),
		modifiedId: 5,
		name: 'Блок стояночного торможения',
		number: 'УЯИС.786454.575',
		path: [],
	},
	4: {
		childs: [],
		id: 4,
		isDocument: false,
		issues: 1,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 7,
		name: 'Блок логики',
		number: 'УЯИС.456451.332',
		path: [],
	},
	5: {
		childs: [],
		id: 5,
		isDocument: false,
		issues: 11,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 12,
		name: 'Блок питания',
		number: 'УЯИС.456877.128',
		path: [],
	},
	6: {
		childs: [],
		id: 6,
		isDocument: false,
		issues: 10,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 13,
		name: 'Плата стабилитронов',
		number: 'УЯИС.123334.777',
		path: [],
	},
	7: {
		childs: [],
		id: 7,
		isDocument: false,
		issues: 8,
		modifiedDate: new Date(),
		modifiedId: 54,
		name: 'Модуль МЦКУ-1Э',
		number: 'УЯИС.314435.875',
		path: [],
	},
	8: {
		childs: [],
		id: 8,
		isDocument: false,
		issues: 7,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 74,
		name: 'Имитатор Кросс-БУТК',
		number: 'УЯИС.122445.666',
		path: [],
	},
	9: {
		branches: 2,
		developer: 'Иванов',
		extension: 'vsdx',
		id: 9,
		isDocument: true,
		issues: 0,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 63,
		number: 'УЯИС.453789.125 Э3',
		path: [],
		name: 'Схема электрическая принципиальная',
	},
	10: {
		branches: 0,
		developer: 'Петров',
		extension: 'sldprt',
		id: 10,
		isDocument: true,
		issues: 15,
		modifiedDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
		modifiedId: 100,
		number: 'УЯИС.453789.125',
		path: [],
		name: '3D модель',
	},
	11: {
		branches: 0,
		developer: 'Долгофамильченко',
		extension: 'dwg',
		id: 11,
		isDocument: true,
		issues: 4,
		modifiedDate: new Date(Date.now() - 150 * 60 * 1000),
		modifiedId: 210,
		number: 'УЯИС.453789.125 ВП',
		path: [],
		name: 'Ведомость покупных изделий',
	},
	12: {
		branches: 3,
		developer: 'Иванов',
		extension: 'dwg',
		id: 12,
		isDocument: true,
		issues: 0,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 17,
		number: 'УЯИС.453789.125',
		path: [],
		name: 'Спецификация',
	},
	13: {
		branches: 2,
		developer: 'Петров',
		extension: 'dwg',
		id: 13,
		isDocument: true,
		issues: 2,
		modifiedDate: new Date(Date.now() - 5 * 60 * 1000),
		modifiedId: 87,
		number: 'УЯИС.453789.125 СБ',
		path: [],
		name: 'Сборочный чертёж',
	},
	14: {
		branches: 2,
		developer: 'Долгофамильченко',
		extension: 'pcb',
		id: 14,
		isDocument: true,
		issues: 5,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 115,
		number: 'УЯИС.787254.331',
		path: [],
		name: 'Печатная плата',
	},
	15: {
		branches: 2,
		developer: 'Иванов',
		extension: 'dwg',
		id: 15,
		isDocument: true,
		issues: 10,
		modifiedDate: new Date(Math.floor(Math.random() * Date.now())),
		modifiedId: 117,
		number: 'УЯИС.453789.125 ВС',
		path: [],
		name: 'Ведомость спецификаций',
	},
	16: {
		childs: [],
		isDocument: false,
		issues: 0,
		modifiedDate: new Date(),
		modifiedId: 500,
	},
	17: {
		branches: 0,
		extension: 'dwg',
		isDocument: true,
		issues: 0,
		modifiedDate: new Date(),
		modifiedId: 500,
	},
};
const mock_projects_db = {
	0: {
		...mock_projects[0],
		childs: [
			mock_projects[1],
		],
	},
	1: {
		...mock_projects[1],
		childs: [
			mock_projects[2],
			mock_projects[14],
			mock_projects[3],
			mock_projects[13],
			mock_projects[4],
			mock_projects[12],
			mock_projects[5],
			mock_projects[11],
			mock_projects[6],
			mock_projects[10],
			mock_projects[7],
			mock_projects[9],
			mock_projects[8],
			mock_projects[15],
		],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
		],
	},
	2: {
		...mock_projects[2],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[2].name, id: mock_projects[2].id },
		],
	},
	3: {
		...mock_projects[3],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[3].name, id: mock_projects[3].id },
		],
	},
	4: {
		...mock_projects[4],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[4].name, id: mock_projects[4].id },
		],
	},
	5: {
		...mock_projects[5],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[5].name, id: mock_projects[5].id },
		],
	},
	6: {
		...mock_projects[6],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[6].name, id: mock_projects[6].id },
		],
	},
	7: {
		...mock_projects[7],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[7].name, id: mock_projects[7].id },
		],
	},
	8: {
		...mock_projects[8],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[8].name, id: mock_projects[8].id },
		],
	},
	9: {
		...mock_projects[9],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[9].name, id: mock_projects[9].id },
		],
	},
	10: {
		...mock_projects[10],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[10].name, id: mock_projects[10].id },
		],
	},
	11: {
		...mock_projects[11],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[11].name, id: mock_projects[11].id },
		],
	},
	12: {
		...mock_projects[12],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[12].name, id: mock_projects[12].id },
		],
	},
	13: {
		...mock_projects[13],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[13].name, id: mock_projects[13].id },
		],
	},
	14: {
		...mock_projects[14],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[14].name, id: mock_projects[14].id },
		],
	},
	15: {
		...mock_projects[15],
		path: [
			{ name: mock_projects[1].name, id: mock_projects[1].id },
			{ name: mock_projects[15].name, id: mock_projects[15].id },
		],
	},
	lastId: 15,
	createEntry({ developer, mode, name, number, order }) {
		const id = ++this.lastId;

		return (mode === 'document') ?
			{
				...mock_projects[17], developer, id, name, number,
				path: [
					{ name: mock_projects[1].name, id: mock_projects[1].id },
					{ name, id },
				],
			} :
			{
				...mock_projects[16], id, name, number, order,
				path: [
					{ name: mock_projects[1].name, id: mock_projects[1].id },
					{ name, id },
				],
			};
	},
};

export const mock_project = DEV_ENV ? mock_projects_db : {};

export const mock_user = DEV_ENV ? {
	name: 'Иван',
	surname: 'Иванов',
	patronym: 'Иванович',
	username: 'developer',
} : {};