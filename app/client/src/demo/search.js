'use strict';

function search(input) {
	return Math.round(Math.random()) ? {} : {
		'Документы': {
			'УЯИС.468332.110': {
				link: '/projects/110',
				content: [
					{ title: 'Спецификация', link: '/projects/xxx' },
					{ title: 'Сборочный чертеж', link: '/projects/yyy' },
					{ title: 'Ведомость покупных изделий', link: '/projects/zzz' },
				]
			},
			'УЯИС.468332.130': {
				link: '/projects/130',
				content: [
					{ title: 'Таблица соединений', link: '/projects/xxx' },
				]
			},
		},
		'Проблемы': {
			'УЯИС.468332.110': {
				link: '/issues/110',
				content: [
					{ title: 'Заменить шайбу поз. 12', subtitle: 'уменьшить высоту шайбы ОСТ 1 12345 на 0.5 мм', link: '/issues/xxx' },
					{ title: 'Добавить резистор R50 в спецификацию', subtitle: 'добавить R50 АБВГ.123456.789 ТУ в спецификацию', link: '/issues/yyy' },
				]
			},
			'УЯИС.468332.130 СБ': {
				link: '/issues/130',
				content: [
					{ title: 'Убрать микросхему D18 и ее конденсаторы', subtitle: 'на основании извещения УЯИС.123 удалить микросхему D18 и конденсаторы C45, C46, C47', link: '/issues/xxx' },
				]
			},
			'УЯИС.468332.130': {
				link: '/issues/130',
				content: [
					{ title: 'Неверный номинал резистора R12', subtitle: 'номинал резистора R12 не совпадает с указанным в перечне', link: '/issues/xxx' },
				]
			},
		},
	};
}


export default search;