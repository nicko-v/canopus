import PropTypes from 'prop-types';
import React from 'react';

import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

});


function AddDirectoryForm({ classes, handleInputChange, name, nameError, number, numberError, onSubmit, order, orderError, projectId }) {
	const numberProps = {
		autoComplete: 'off',
		autoFocus: true,
		error: Boolean(numberError),
		fullWidth: true,
		helperText: numberError,
		id: 'directory-number',
		label: 'Номер изделия',
		margin: 'normal',
		onChange: handleInputChange('number'),
		placeholder: 'АБВГ.123456.789',
		value: number,
	};
	const nameProps = {
		autoComplete: 'off',
		error: Boolean(nameError),
		fullWidth: true,
		helperText: nameError,
		id: 'directory-name',
		label: 'Название изделия',
		margin: 'normal',
		onChange: handleInputChange('name'),
		placeholder: 'Плата многослойная',
		value: name,
	};
	const orderProps = {
		autoComplete: 'off',
		error: Boolean(orderError),
		helperText: orderError,
		id: 'directory-order',
		label: 'Номер заказа',
		margin: 'normal',
		onChange: handleInputChange('order'),
		placeholder: '1-234-56',
		value: order,
	};
	const isRoot = projectId === 0;

	return (
		<form id="add-directory" onSubmit={onSubmit}>
			<TextField {...numberProps} />
			<TextField {...nameProps} />
			{isRoot && <TextField {...orderProps} />}
		</form>
	);
}

AddDirectoryForm.propTypes = {
	classes: PropTypes.object,
	handleInputChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	nameError: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	numberError: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderError: PropTypes.string.isRequired,
	projectId: PropTypes.number,
};


export default withStyles(styles)(AddDirectoryForm);