import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DirectoryIcon from '@material-ui/icons/Folder';
import DocumentIcon from '@material-ui/icons/Description';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import stringifyDate from 'Src/utils/stringify-date';


const styles = theme => ({
	actions: {
		flexWrap: 'wrap',
	},
	avatarWrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		marginRight: 24,
	},
	content: {
		alignItems: 'center',
	},
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
	exPanDetails: {
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	extension: {
		marginTop: 4,
		textTransform: 'lowercase',
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
	noWrap: {
		whiteSpace: 'nowrap',
	},
	panelTitle: {
		flexBasis: '50%',
		paddingRight: 32,
		textTransform: 'uppercase',
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


function ProjectPanel(props) {
	const {
		background,
		branches,
		childs,
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

	const date = modifiedDate ? stringifyDate(modifiedDate) : 'Н/Д';
	const avatarStyle = background ? { background: background.avatar, color: '#fff' } : undefined;
	const paperStyle = background ? { background: background.paper } : undefined;
	const panelTitleClassName = classNames(classes.panelTitle, classes.noWrap);
	const editButtonProps = {
		children: 'Редактировать',
		size: 'small',
	};
	const updateButtonProps = {
		children: 'Добавить версию',
		size: 'small',
	};
	const openButtonProps = {
		children: isDocument ? 'Скачать' : 'Открыть',
		color: 'secondary',
		component: Link,
		size: 'small',
		to: isDocument ? `/files/${id}` : `/projects/${id}`,
		variant: 'raised',
	};
	const text1Props = {
		className: classes.detailsCellTitle + ' noselect',
		color: 'inherit',
		noWrap: true,
	};
	const text2Props = {
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
		<ExpansionPanel style={paperStyle}>
			<ExpansionPanelSummary classes={{ content: classes.content }} expandIcon={<ExpandMoreIcon />}>
				<div className={classes.avatarWrapper}>
					<Avatar style={avatarStyle}>
						{isDocument ? <DocumentIcon /> : <DirectoryIcon />}
					</Avatar>
					{isDocument && <Typography children={extension} className={classes.extension} variant="caption" />}
				</div>
				<div className={classes.panelTitleWrapper}>
					<Typography children={number} className={panelTitleClassName} />
					<Typography children={name} className={classes.uppercaseFirst} color="textSecondary" />
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails classes={{ root: classes.exPanDetails }}>
				<div className={classes.details}>
					{isDocument &&
						<div className={classes.detailsCell}>
							<Typography {...text1Props}>Разработчик</Typography>
							<Typography {...text2Props}>{developer}</Typography>
						</div>
					}
					{(!isDocument && order) &&
						<div className={classes.detailsCell}>
							<Typography {...text1Props}>№ заказа</Typography>
							<Typography {...text2Props}>{order}</Typography>
						</div>
					}
					<div className={classes.detailsCell}>
						<Typography {...text1Props}>Изменено</Typography>
						<Typography {...text2Props} {...modifiedProps}>{date}</Typography>
					</div>
					<div className={classes.detailsCell}>
						<Typography {...text1Props}>Проблемы</Typography>
						<Typography {...text2Props} {...issuesProps}>{issues || 'нет'}</Typography>
					</div>
					{isDocument &&
						<div className={classes.detailsCell}>
							<Typography {...text1Props}>Варианты</Typography>
							<Typography {...text2Props} {...branchesProps}>{branches || 'нет'}</Typography>
						</div>
					}
				</div>
				<div className={classes.options}>
					{!isDocument && <Typography className="link" component={Link} to={`/projects/${id}/map`} children="Карта блока" />}
					<Typography className="link" component={Link} to={`/projects/${id}/history`} children="История изменений" />
				</div>
			</ExpansionPanelDetails>
			<Divider />
			<ExpansionPanelActions className={classes.actions}>
				<Button {...editButtonProps} />
				<Button {...updateButtonProps} />
				<Button {...openButtonProps} />
			</ExpansionPanelActions>
		</ExpansionPanel>
	);
}

ProjectPanel.propTypes = {
	background: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		paper: PropTypes.string.isRequired,
	}),
	branches: PropTypes.number,
	childs: PropTypes.arrayOf(PropTypes.object),
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