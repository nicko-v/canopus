import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import AccountCircle from 'material-ui-icons/AccountCircle';

import IconWithPopover from './icon-with-popover';


const styles = {
	paper: {
		width: 250,
		padding: 20,
		textAlign: 'center',
	},
	icon: {
		width: 60,
		height: 60,
	},
	name: {
		wordBreak: 'break-all',
	},
	divider: {
		margin: '30px 0 10px 0'
	},
};


function AccountButton({ classes, name, signOut }) {
	return (
		<IconWithPopover title="Аккаунт" icon={AccountCircle} paperStyles={classes.paper}>
			<AccountCircle color="primary" className={classes.icon} />
			<Typography variant="title" className={classes.name}>{name}</Typography>
			<Divider className={classes.divider} />
			<Button size="small" component={Link} to="/profile">Профиль</Button>
			<Button size="small" onClick={signOut}>Выйти</Button>
		</IconWithPopover>
	);
}


AccountButton.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	signOut: PropTypes.func.isRequired,
};

export default withStyles(styles)(AccountButton);