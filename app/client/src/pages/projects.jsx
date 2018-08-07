import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';

import AddButton from 'Src/containers/project-add-button';
import AddDialog from 'Src/containers/project-add-dialog';
import ProjectContent from 'Src/containers/project-content';

import Project_Actions from 'Src/action-creators/project';


const styles = theme => ({
	fab: {
		bottom: 32,
		position: 'fixed',
		right: 32,
		[theme.breakpoints.down('xs')]: {
			bottom: 16,
			right: 16,
		},
	},
	wrapper: {
		padding: '50px 0',
		position: 'relative',
	},
});

const mapDispatchToProps = dispatch => ({
	loadProject(id) { dispatch(Project_Actions.loadProjectRequest(id)); },
});


@withStyles(styles)
@connect(null, mapDispatchToProps)
class Projects extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
		loadProject: PropTypes.func.isRequired,
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string,
			}).isRequired,
		}).isRequired,
	};

	componentDidMount() {
		const id = this.parseId(this.props.match.params.id);

		document.title = 'Канопус | Проекты';
		this.props.loadProject(id);
	}

	componentWillUpdate(nextProps) {
		const id = this.parseId(nextProps.match.params.id);

		this.props.loadProject(id);
	}

	parseId(id) {
		return parseInt(id) || 0;
	}

	render() {
		const { classes } = this.props;

		return (
			<Fade in>
				<main className={classes.wrapper}>
					<ProjectContent />
					<AddButton externalStyles={classes.fab} />
					<AddDialog />
				</main>
			</Fade>
		);
	}
}


export default Projects;