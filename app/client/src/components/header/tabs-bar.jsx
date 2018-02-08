import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Tabs, { Tab } from 'material-ui/Tabs';


function TabsBar({ activeTab, handleTabChange }) {
	return (
		<Tabs value={activeTab} onChange={handleTabChange}>
			<Tab label="Проекты" component={Link} to="/projects" />
			<Tab label="Проблемы" component={Link} to="/issues" />
		</Tabs>
	);
}

TabsBar.propTypes = {
	activeTab: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
	handleTabChange: PropTypes.func.isRequired,
};


export default TabsBar;