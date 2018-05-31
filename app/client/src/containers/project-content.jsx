import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from 'Src/components/project-card/main';
import Panel from 'Src/components/project-panel/main';


const styles = theme => ({
	noContent: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textTransform: 'uppercase',
	},
	cardsWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		margin: '-16px auto 0', // -20 компенсирует верхние отступы первого ряда карточек что бы при переключении на список первые элементы были на одной высоте.
		maxWidth: 1200,
	},
	panelsWrapper: {
		margin: '0 auto',
		maxWidth: 800,
	},
});

const mapStateToProps = state => ({
	childs: state.project.childs,
	layout: state.ui.projectsLayout,
});


@withStyles(styles, { withTheme: true })
@connect(mapStateToProps)
class ProjectContent extends React.Component {
	static propTypes = {
		childs: PropTypes.arrayOf(PropTypes.object),
		classes: PropTypes.object,
		layout: PropTypes.string.isRequired,
		theme: PropTypes.object.isRequired,
	};

	render() {
		const { childs, classes, layout, theme } = this.props;
		const extensionColor = theme.custom.extensionColor;
		const isTiles = layout === 'tiles';
		const noContentProps = {
			align: 'center',
			className: classes.noContent + ' noselect',
			color: 'textSecondary',
			variant: 'title',
		};

		if (!childs.length) {
			return <Typography {...noContentProps}>Содержимое отсутствует</Typography>;
		}

		return (
			<div className={classes[isTiles ? 'cardsWrapper' : 'panelsWrapper']}>
				{childs.map(project => {
					const background = project.isDocument ? (extensionColor[project.extension] || extensionColor.unknown) : undefined;
					const unitProps = {
						...project,
						background,
						key: project.id,
					};

					return isTiles ?
						<Card {...unitProps} /> :
						<Panel {...unitProps} />
				})}
			</div>
		);
	}
}


export default ProjectContent;