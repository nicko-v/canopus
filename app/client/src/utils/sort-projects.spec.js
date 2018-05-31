import sortProjects from './sort-projects';


const p0 = { id: 0, name: 'а1', number: 'б10', isDocument: false, modifiedDate: new Date(5) };
const p1 = { id: 1, name: 'а2', number: 'б2', isDocument: false, modifiedDate: new Date(4) };
const p2 = { id: 2, name: 'а10', number: 'б1', isDocument: false, modifiedDate: new Date(3) };

const p3 = { id: 3, name: 'а1', number: 'б1', isDocument: true, modifiedDate: new Date(2) };
const p4 = { id: 4, name: 'а2', number: 'б2', isDocument: true, modifiedDate: new Date(1) };
const p5 = { id: 5, name: 'а10', number: 'б10', isDocument: true, modifiedDate: new Date(0) };

const projects = [p0, p5, p1, p4, p2, p3];


describe('sort-projects.js', () => {
	describe('Сортировка', () => {
		test('по названию, при этом документы - по типу', () => {
			const result = projects.sort(sortProjects('name'));

			expect(result.map(e => e.id).join('')).toBe('012345');
		});

		test('по номеру', () => {
			const result = projects.sort(sortProjects('number'));

			expect(result.map(e => e.id).join('')).toBe('210345');
		});

		test('по дате', () => {
			const result = projects.sort(sortProjects('date'));

			expect(result.map(e => e.id).join('')).toBe('210543');
		});

		test('по названию если не указан способ', () => {
			const result = projects.sort(sortProjects());

			expect(result.map(e => e.id).join('')).toBe('012345');
		});
	});


	describe('Сравнение', () => {
		test('по названию, одного типа', () => {
			expect(sortProjects('name')(p2, p1)).toBe(1);
		});

		test('по номеру, одного типа', () => {
			expect(sortProjects('number')(p0, p1)).toBe(1);
		});

		test('по дате, одного типа', () => {
			expect(sortProjects('date')(p0, p1)).toBe(1);
		});

		test('по названию, разного типа', () => {
			expect(sortProjects('name')(p3, p1)).toBe(1);
		});

		test('по номеру, разного типа', () => {
			expect(sortProjects('number')(p3, p1)).toBe(1);
		});

		test('по дате, разного типа', () => {
			expect(sortProjects('date')(p5, p0)).toBe(1);
		});
	});
});