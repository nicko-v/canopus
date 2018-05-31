import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import DateIcon from '@material-ui/icons/DateRange';
import NameIcon from '@material-ui/icons/FontDownload';
import NumberIcon from '@material-ui/icons/LooksOne';

import View from 'Src/components/action-bar/switcher';

import Project_Actions from 'Src/action-creators/project';


const mapStateToProps = state => ({
	sortOrder: state.ui.projectsSortOrder,
});
const mapDispatchToProps = dispatch => ({
	sortProjects(order) { dispatch(Project_Actions.sortProjects(order)); },
});


@connect(mapStateToProps, mapDispatchToProps)
class SortProjects extends React.Component {
	static propTypes = {
		sortOrder: PropTypes.string.isRequired,
		sortProjects: PropTypes.func.isRequired,
	};

	handleTabChange = (event, value) => {
		window.localStorage.setItem('projectsSortOrder', value);
		this.props.sortProjects(value);
	};

	render() {
		const viewProps = {
			currentTab: this.props.sortOrder,
			handleTabChange: this.handleTabChange,
			title: 'сортировка',
			values: ['number', 'name', 'date'],
		};

		return (
			<View {...viewProps}>
				<NumberIcon />
				<NameIcon style={{ fontSize: 22 }} />{/* Уменьшаем, т.к. эта иконка чуть больше других. */}
				<DateIcon />
			</View>
		);
	}
}


export default SortProjects;