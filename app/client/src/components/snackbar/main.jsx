import PropTypes from 'prop-types';
import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';


function MainSnackbar({ isActive, message }) {
	const props = {
		open: isActive,
		message: <span>{message}</span>,
		anchorOrigin: { vertical: 'bottom', horizontal: 'left', },
		className: 'noselect',
	};

	return <Snackbar {...props} />;
}

MainSnackbar.propTypes = {
	isActive: PropTypes.bool.isRequired,
	message: PropTypes.string,
};


export default MainSnackbar;