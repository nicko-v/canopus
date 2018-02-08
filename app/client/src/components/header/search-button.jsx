import PropTypes from 'prop-types';
import React from 'react';

import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';
import Search from 'material-ui-icons/Search';
import { withStyles } from 'material-ui/styles';

import bound from 'Src/utils/bound';
import search from 'Src/api/search';

import IconWithPopover from './icon-with-popover';
import SearchResults from './search-results';


const styles = {
	paper: {
		width: '600px',
	},
	input: {
		width: '100%',
		padding: '10px 16px',
	},
};


@withStyles(styles)
class SearchButton extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
	};

	constructor() {
		super();

		this.state = {
			inputValue: '',
			searchResults: {},
		};
	}

	@bound
	onInputChange(event) {
		const input = event.target.value;

		this.setState({
			inputValue: input,
			searchResults: search(input),
		});
	}

	moveCaretAtEnd(event) {
		const value = event.target.value;

		event.target.value = '';
		event.target.value = value;
	}

	render() {
		const { classes } = this.props;
		const inputProps = {
			disableUnderline: true,
			autoFocus: true,
			spellCheck: false,
			className: classes.input,
			onChange: this.onInputChange,
			onFocus: this.moveCaretAtEnd,
			value: this.state.inputValue,
			placeholder: 'Документ, проблема, пользователь...',
		};

		return (
			<IconWithPopover title="Поиск" icon={Search} paperStyles={classes.paper}>
				<Input {...inputProps} />
				<Divider />
				{this.state.inputValue && <SearchResults results={this.state.searchResults} />}
			</IconWithPopover>
		);
	}
}


export default SearchButton;