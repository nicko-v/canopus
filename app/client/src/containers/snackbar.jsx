import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/snackbar/main';


const mapStateToProps = state => ({
	isActive: state.ui.isSnackbarActive,
	message: state.ui.snackbarMessage,
});


function MainSnackbar({ isActive, message }) {
	return <View isActive={isActive} message={message} />;
}

MainSnackbar.propTypes = {
	isActive: PropTypes.bool.isRequired,
	message: PropTypes.string,
};


export default connect(mapStateToProps)(MainSnackbar);