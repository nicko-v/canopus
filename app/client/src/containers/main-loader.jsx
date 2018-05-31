import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/main-loader/main';


const mapStateToProps = state => ({
	isActive: state.ui.isMainLoaderActive,
});


function MainLoader({ isActive }) {
	return <View isActive={isActive} />;
}

MainLoader.propTypes = {
	isActive: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps)(MainLoader);