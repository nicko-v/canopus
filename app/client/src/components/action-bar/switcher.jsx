import PropTypes from 'prop-types';
import React from 'react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	tabRoot: {
		minHeight: 32,
		marginRight: 8,
		minWidth: 32,
		'&:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.up('md')]: {
			minWidth: 32,
		},
	},
	tabsRoot: {
		minHeight: 32,
	},
	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: theme.custom.actionBar.height,
		justifyContent: 'flex-end',
	},
});


function Switcher({ children, classes, currentTab, handleTabChange, title, values }) {
	return ( // TODO: Обязательно нужны тултипы к иконкам. Пока не реализовано в MUI.
		<div className={classes.wrapper}>
			<Typography className="noselect" color="inherit" variant="caption">{title}</Typography>
			<Tabs classes={{ root: classes.tabsRoot }} onChange={handleTabChange} value={currentTab}>
				{children.map((icon, index) =>
					<Tab
						classes={{ root: classes.tabRoot }}
						icon={icon}
						key={values[index]}
						value={values[index]}
					/>
				)}
			</Tabs>
		</div>
	);
}

Switcher.propTypes = {
	children: PropTypes.array.isRequired,
	classes: PropTypes.object,
	currentTab: PropTypes.string.isRequired,
	handleTabChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	values: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default withStyles(styles)(Switcher);