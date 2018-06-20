import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DirectoryIcon from '@material-ui/icons/Folder';
import DocumentIcon from '@material-ui/icons/Description';
import ExpandIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
	avatarWrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		marginRight: 24,
		position: 'relative',
	},
	content: {
		alignItems: 'center',
	},
	expanded: {
		'& *[data-type="extension"]': {
			left: '50%',
			padding: 0,
			top: 'calc(100% + 2px)',
			transform: 'translateX(-50%)',
		},
	},
	extension: {
		left: -10,
		letterSpacing: 0.5, // Так вертикальный текст чуть проще читается.
		padding: '0 4px',
		position: 'absolute',
		textAlign: 'center',
		textTransform: 'lowercase',
		top: '50%',
		transform: 'translate(-50%, -50%) rotate(270deg)',
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
		}),
		width: 64, // Высота панели.
	},
	panelTitle: {
		flexBasis: '50%',
		paddingRight: 32,
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
	},
	panelTitleWrapper: {
		display: 'flex',
		flexGrow: 1,
		flexWrap: 'wrap',
	},
	uppercaseFirst: {
		'&::first-letter': {
			textTransform: 'uppercase',
		},
	},
});


function PanelSummary({ avatarStyle, classes, extension, isDocument, name, number, ...rest }) {
	const summaryProps = {
		classes: {
			content: classes.content,
			expanded: classes.expanded,
		},
		expandIcon: <ExpandIcon />,
		...rest,
	};


	return (
		<ExpansionPanelSummary {...summaryProps}>
			<div className={classes.avatarWrapper}>
				<Avatar style={avatarStyle}>
					{isDocument ?
						<DocumentIcon /> :
						<DirectoryIcon />
					}
				</Avatar>
				{isDocument &&
					<Typography children={extension} className={classes.extension} data-type="extension" noWrap variant="caption" />
				}
			</div>
			<div className={classes.panelTitleWrapper}>
				<Typography children={number} className={classes.panelTitle} />
				<Typography children={name} className={classes.uppercaseFirst} color="textSecondary" />
			</div>
		</ExpansionPanelSummary>
	);
}

PanelSummary.muiName = 'ExpansionPanelSummary';

PanelSummary.propTypes = {
	avatarStyle: PropTypes.shape({
		background: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object,
	extension: PropTypes.string,
	isDocument: PropTypes.bool,
	name: PropTypes.string,
	number: PropTypes.string,
};


export default withStyles(styles)(PanelSummary);