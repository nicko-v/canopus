import PropTypes from 'prop-types';
import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import CardDetails from './details';
import CardHeader from './header';


const styles = theme => ({
	card: {
		flexShrink: 0,
		margin: 16,
		transition: theme.transitions.create('box-shadow', {
			duration: theme.transitions.duration.short,
		}),
		width: 230,
		'&:hover': {
			boxShadow: theme.shadows[8],
		},
	},
});


function ProjectCard(props) {
	const {
		background,
		branches,
		classes,
		developer,
		extension,
		id,
		isDocument,
		issues,
		modifiedDate,
		modifiedId,
		name,
		number,
		order,
	} = props;
	const cardProps = {
		className: classes.card,
		style: background ? { background: background.paper } : undefined,
	};
	const headerProps = { background, extension, id, isDocument, name, number };
	const detailsProps = { branches, developer, id, isDocument, issues, modifiedDate, modifiedId, order };


	return (
		<Card {...cardProps}>
			<CardContent>
				<CardHeader {...headerProps} />
				<CardDetails {...detailsProps} />
			</CardContent>
		</Card>
	);
}

ProjectCard.propTypes = {
	background: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		paper: PropTypes.string.isRequired,
	}),
	branches: PropTypes.number,
	classes: PropTypes.object,
	developer: PropTypes.string,
	extension: PropTypes.string,
	id: PropTypes.number,
	isDocument: PropTypes.bool,
	issues: PropTypes.number,
	modifiedDate: PropTypes.object,
	modifiedId: PropTypes.number,
	name: PropTypes.string,
	number: PropTypes.string,
	order: PropTypes.string,
};


export default withStyles(styles)(ProjectCard);