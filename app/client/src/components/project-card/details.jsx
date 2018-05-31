import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import stringifyDate from 'Src/utils/stringify-date';


const styles = theme => ({
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: 4,
	},
	title: {
		flex: '0 0 50%',
		paddingRight: 8,
	},
	wrapper: {
		marginTop: 32,
	},
});


function CardDetails({ branches, classes, developer, id, isDocument, issues, modifiedDate, modifiedId, order }) {
	const date = modifiedDate ? stringifyDate(modifiedDate) : 'Н/Д';
	const text1Props = {
		className: classes.title + ' noselect',
		color: 'inherit',
		noWrap: true,
		variant: 'caption',
	};
	const text2Props = {
		color: 'primary',
		noWrap: true,
		variant: 'caption',
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
		<div className={classes.wrapper}>
			{isDocument &&
				<div className={classes.row}>
					<Typography {...text1Props}>Разработчик:</Typography>
					<Typography {...text2Props}>{developer}</Typography>
				</div>
			}
			{(!isDocument && order) &&
				<div className={classes.row}>
					<Typography {...text1Props}>Номер заказа:</Typography>
					<Typography {...text2Props}>{order}</Typography>
				</div>
			}
			<div className={classes.row}>
				<Typography {...text1Props}>Изменено:</Typography>
				<Typography {...text2Props} {...modifiedProps}>{date}</Typography>
			</div>
			<div className={classes.row}>
				<Typography {...text1Props}>Проблемы:</Typography>
				<Typography {...text2Props} {...issuesProps}>{issues || 'нет'}</Typography>
			</div>
			{isDocument &&
				<div className={classes.row}>
					<Typography {...text1Props}>Варианты:</Typography>
					<Typography {...text2Props} {...branchesProps}>{branches || 'нет'}</Typography>
				</div>
			}
		</div>
	);
}

CardDetails.propTypes = {
	branches: PropTypes.number,
	classes: PropTypes.object,
	developer: PropTypes.string,
	id: PropTypes.number,
	isDocument: PropTypes.bool,
	issues: PropTypes.number,
	modifiedDate: PropTypes.object,
	modifiedId: PropTypes.number,
	order: PropTypes.string,
};


export default withStyles(styles)(CardDetails);