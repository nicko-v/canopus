import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import View from 'Src/components/header/main';

import UI_Actions from 'Src/action-creators/ui';


const mapDispatchToProps = dispatch => ({
	showDrawer() { dispatch(UI_Actions.showMainDrawer()); },
});


function Header({ showDrawer }) {
	return <View showDrawer={showDrawer} />;
}

Header.propTypes = {
	showDrawer: PropTypes.func.isRequired,
};


export default withRouter(connect(null, mapDispatchToProps)(Header));