import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import AccountIcon from '@material-ui/icons/AccountCircle';


const styles = theme => ({

});


function AccountButton({ classes }) {
	return (
		<Tooltip title="Аккаунт">
			<IconButton color="inherit">
				<AccountIcon />
			</IconButton>
		</Tooltip>
	);
}


AccountButton.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles)(AccountButton);