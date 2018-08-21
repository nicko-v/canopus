import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import TableIcon from '@material-ui/icons/ViewStream';
import TilesIcon from '@material-ui/icons/ViewModule';

import View from 'Src/components/action-bar/switcher';

import UI_Actions from 'Src/action-creators/ui';


const mapStateToProps = state => ({
	projectsLayout: state.ui.projectsLayout,
});
const mapDispatchToProps = dispatch => ({
	switchProjectsLayout(layout) { dispatch(UI_Actions.switchProjectsLayout(layout)); },
});


@connect(mapStateToProps, mapDispatchToProps)
class SwitchProjectsLayout extends React.Component {
	static propTypes = {
		projectsLayout: PropTypes.string.isRequired,
		switchProjectsLayout: PropTypes.func.isRequired,
	};

	handleTabChange = (event, value) => {
		window.localStorage.setItem('projectsLayout', value);
		this.props.switchProjectsLayout(value);
	};

	render() {
		const viewProps = {
			currentTab: this.props.projectsLayout,
			handleTabChange: this.handleTabChange,
			title: 'вид',
			tooltips: ['Карточки', 'Список'],
			values: ['tiles', 'list'],
		};

		return (
			<View {...viewProps}>
				<TilesIcon />
				<TableIcon />
			</View>
		);
	}
}


export default SwitchProjectsLayout;