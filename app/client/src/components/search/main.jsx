import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';


const styles = theme => ({
	input: {
		backgroundColor: theme.palette.primary.midLight,
		borderRadius: 4,
		color: 'inherit',
		margin: '0 10px',
		paddingLeft: 15,
		paddingRight: 15, transition: theme.transitions.create('background-color', {
			duration: theme.transitions.duration.short,
		}),
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
		},
	},
	inputAdornment: {
		fontSize: 24,
	},
	desktopClasses: {
		transition: theme.transitions.create('width', {
			duration: theme.transitions.duration.standard,
		}),
		width: 150,
		'&:focus': {
			width: 200,
		},
	},
	mobileClasses: {
		width: '100%',
	},
});


function Search({ classes, inputValue, onInputChange, onKeyDown, saveNode, theme, width }) {
	const isMobile = theme.breakpoints.width(width) < theme.breakpoints.width(theme.custom.search.breakpoint);
	const startAdornment = (
		<InputAdornment position="start">
			<Icon children="search" className={classes.inputAdornment} />
		</InputAdornment>
	);
	const inputProps = {
		placeholder: DEV_ENV ? width : undefined, // TODO: Убрать.
		className: classes.input,
		classes: {
			input: isMobile ? classes.mobileClasses : classes.desktopClasses,
		},
		disableUnderline: true,
		fullWidth: isMobile,
		inputProps: {
			onKeyDown,
			ref: node => saveNode(node),
			spellCheck: false,
			tabIndex: 1,
		},
		onChange: onInputChange,
		startAdornment,
		value: inputValue,
	};

	return (
		<Input {...inputProps} />
	);
}

Search.propTypes = {
	classes: PropTypes.object,
	inputValue: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onKeyDown: PropTypes.func.isRequired,
	saveNode: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
};


export default withWidth()(withStyles(styles, { withTheme: true })(Search));