import PropTypes from 'prop-types';
import React from 'react';

import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

});


function AddDocumentForm({ classes, developer, developerError, handleInputChange, name, nameError, number, numberError, onSubmit }) {
	return (
		<form id="add-document" onSubmit={onSubmit}>

		</form>
	);
}

AddDocumentForm.propTypes = {
	classes: PropTypes.object,
	developer: PropTypes.string.isRequired,
	developerError: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	nameError: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	numberError: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};


export default withStyles(styles)(AddDocumentForm);