import PropTypes from 'prop-types';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

import bound from 'Src/utils/bound';

import SiFormContainer from 'Src/containers/sign-in';
import SuFormContainer from 'Src/containers/sign-up';


const styles = theme => ({
	paper: {
		position: 'relative',
	},
	form: {
		padding: '32px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	button: {
		margin: '54px auto 0',
	},
	textFieldHalf: {
		width: 'calc(50% - 16px)',
	},
});


@withStyles(styles)
class SignIn extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
	};

	constructor() {
		super();

		this.state = {
			activeTab: 0,
		};
	}

	@bound
	handleTabChange(event, value) {
		this.setState({ activeTab: value });
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<Tabs fullWidth value={this.state.activeTab} onChange={this.handleTabChange}>
					<Tab label="Вход" />
					<Tab label="Регистрация" />
				</Tabs>
				<SwipeableViews index={this.state.activeTab}>
					<SiFormContainer classes={classes} />
					<SuFormContainer classes={classes} />
				</SwipeableViews>
			</Paper>
		);
	}
}


export default SignIn;