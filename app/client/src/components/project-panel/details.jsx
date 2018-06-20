import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	details: {
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			width: 240,
		},
	},
	detailsCell: {
		borderRight: `1px solid ${theme.palette.divider}`,
		marginRight: 12,
		paddingRight: 12,
		textAlign: 'center',
		'&:last-child': {
			borderRight: 'none',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			justifyContent: 'space-between',
			borderRight: 'none',
			marginRight: 0,
			paddingRight: 0,
			textAlign: 'left',
		},
	},
	detailsCellTitle: {
		textTransform: 'lowercase',
		[theme.breakpoints.down('xs')]: {
			flex: '0 0 50%',
			textTransform: 'none',
			'&::after': {
				content: '":"',
			},
		},
	},
	options: {
		alignItems: 'flex-end',
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: 24,
		[theme.breakpoints.down('xs')]: {
			alignSelf: 'flex-end',
			flexDirection: 'row',
			marginTop: 16,
			paddingLeft: 0,
			'& > a': {
				marginRight: 16,
			},
			'& > a:last-child': {
				marginRight: 0,
			},
		},
	},
	wrapper: {
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
});


function PanelDetails({ branches, classes, developer, id, isDocument, issues, modifiedDate, modifiedId, order, ...rest }) {
	const cellHeaderProps = {
		className: classes.detailsCellTitle + ' noselect',
		color: 'inherit',
		noWrap: true,
	};
	const cellContentProps = {
		color: 'primary',
		noWrap: true,
	};
	const branchesProps = {
		className: 'link',
		component: Link,
		to: `/projects/${id}/branches`,
	};
	const issuesProps = {
		className: 'link',
		component: Link,
		to: `/issues/${id}`,
	};
	const modifiedProps = {
		className: 'link',
		component: Link,
		to: `/projects/${id}/history/${modifiedId}`,
	};


	return (
		<ExpansionPanelDetails classes={{ root: classes.wrapper }} {...rest}>
			<div className={classes.details}>
				{isDocument &&
					<div className={classes.detailsCell}>
						<Typography {...cellHeaderProps}>Разработчик</Typography>
						<Typography {...cellContentProps}>{developer}</Typography>
					</div>
				}
				{(!isDocument && order) &&
					<div className={classes.detailsCell}>
						<Typography {...cellHeaderProps}>№ заказа</Typography>
						<Typography {...cellContentProps}>{order}</Typography>
					</div>
				}
				<div className={classes.detailsCell}>
					<Typography {...cellHeaderProps}>Изменено</Typography>
					<Typography {...cellContentProps} {...modifiedProps}>{modifiedDate}</Typography>
				</div>
				<div className={classes.detailsCell}>
					<Typography {...cellHeaderProps}>Проблемы</Typography>
					<Typography {...cellContentProps} {...issuesProps}>{issues || 'нет'}</Typography>
				</div>
				{isDocument &&
					<div className={classes.detailsCell}>
						<Typography {...cellHeaderProps}>Варианты</Typography>
						<Typography {...cellContentProps} {...branchesProps}>{branches || 'нет'}</Typography>
					</div>
				}
			</div>
			<div className={classes.options}>
				{!isDocument &&
					<Typography className="link" component={Link} to={`/projects/${id}/map`} children="Карта блока" />
				}
				<Typography className="link" component={Link} to={`/projects/${id}/history`} children="История изменений" />
			</div>
		</ExpansionPanelDetails>
	);
}

PanelDetails.muiName = 'ExpansionPanelDetails';

PanelDetails.propTypes = {
	branches: PropTypes.number,
	classes: PropTypes.object,
	developer: PropTypes.string,
	id: PropTypes.number,
	isDocument: PropTypes.bool,
	issues: PropTypes.number,
	modifiedDate: PropTypes.string.isRequired,
	modifiedId: PropTypes.number,
	order: PropTypes.string,
};


export default withStyles(styles)(PanelDetails);