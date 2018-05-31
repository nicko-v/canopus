import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';

import bound from 'Src/utils/bound';
import search from 'Src/api/search';

import View from 'Src/components/search/main';


class Search extends React.Component {
	static propTypes = {

	};

	constructor() {
		super();

		this.state = {
			inputValue: '',
		};

		this.input = null;
	}

	/* 
		// Коллбэк onFocus для инпута, которому задан автофокус, нужен для предотвращения перепрыгивания курсора в начало поля.
		// Сейчас не используется, нужен только если инпут перемонтируется (открывается/закрывается кнопкой).
		moveCaretAtEnd(event) {
			const value = event.target.value;
	
			event.target.value = '';
			event.target.value = value;
		}
	*/

	@bound
	handleInputChange(event) {
		const value = event.target.value;

		this.setState({
			inputValue: value,
		});
	}

	@bound
	handleKeyDown(event) {
		if (event.keyCode === 27) { this.input && this.input.blur(); }
	}

	@bound
	saveNode(node) {
		this.input = findDOMNode(node);
	}

	render() {
		return (
			<View
				inputValue={this.state.inputValue}
				onInputChange={this.handleInputChange}
				onKeyDown={this.handleKeyDown}
				saveNode={this.saveNode}
			/>
		);
	}
}


export default Search;