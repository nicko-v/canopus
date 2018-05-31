import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import View from 'Src/components/main-drawer/main';

import UI_Actions from 'Src/action-creators/ui';


const mapStateToProps = state => ({
	isActive: state.ui.isMainDrawerActive,
});
const mapDispatchToProps = dispatch => ({
	hideDrawer() { dispatch(UI_Actions.hideMainDrawer()); },
});


function MainDrawer({ hideDrawer, isActive }) {
	return <View hideDrawer={hideDrawer} isActive={isActive} />;
}

MainDrawer.propTypes = {
	hideDrawer: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(MainDrawer);