import PropTypes from 'prop-types';
import React from 'react';

import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { withStyles } from '@material-ui/core/styles';

import PanelSummary from './summary';
import PanelDetails from './details';
import PanelActions from './actions';

import stringifyDate from 'Src/utils/stringify-date';


const styles = theme => ({

});


function ProjectPanel(props) {
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

	const modifiedDate_str = modifiedDate ? stringifyDate(modifiedDate) : 'Н/Д';
	const avatarStyle = background ? { background: background.avatar, color: '#fff' } : undefined;
	const paperStyle = background ? { background: background.paper } : undefined;
	const summaryProps = { avatarStyle, isDocument, extension, name, number };
	const detailsProps = { branches, developer, id, isDocument, issues, modifiedDate: modifiedDate_str, modifiedId, order };
	const actionsProps = { id, isDocument };


	return (
		<ExpansionPanel style={paperStyle}>
			<PanelSummary {...summaryProps} />
			<PanelDetails {...detailsProps} />
			<Divider />
			<PanelActions {...actionsProps} />
		</ExpansionPanel>
	);
}

ProjectPanel.propTypes = {
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


export default withStyles(styles)(ProjectPanel);