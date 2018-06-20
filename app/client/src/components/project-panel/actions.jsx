import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '@material-ui/core/Button';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	action: {
		marginLeft: 0,
		marginRight: theme.spacing.unit,
		'&:first-child': {
			marginLeft: theme.spacing.unit,
		},
		'&:last-child': {
			marginLeft: 'auto',
		},
	},
	actions: {
		flexWrap: 'wrap',
		'& > *': {
			[theme.breakpoints.down('xs')]: {
				marginTop: 8,
			},
		},
	},
});


function PanelActions({ classes, id, isDocument, ...rest }) {
	const primaryButtonProps = {
		color: 'secondary',
		component: Link,
		size: 'small',
		to: isDocument ? `/files/${id}` : `/projects/${id}`,
		variant: 'contained',
	};
	const secondaryButtonProps = {
		size: 'small',
		variant: 'outlined',
	};


	return (
		<ExpansionPanelActions classes={{ action: classes.action }} className={classes.actions} {...rest}>
			<Button children="Редактировать" {...secondaryButtonProps} />
			{isDocument && <Button children="Добавить версию" {...secondaryButtonProps} />}
			<Button children={isDocument ? 'Скачать' : 'Открыть'} {...primaryButtonProps} />
		</ExpansionPanelActions>
	);
}

PanelActions.muiName = 'ExpansionPanelActions';

PanelActions.propTypes = {
	classes: PropTypes.object,
	id: PropTypes.number,
	isDocument: PropTypes.bool,
};


export default withStyles(styles)(PanelActions);