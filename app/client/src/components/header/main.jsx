import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import ToolBar from 'material-ui/ToolBar';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

import Logo from 'material-ui-icons/Memory';

import AccountButton from 'Src/containers/account-button';
import NotificationsButton from './notifications-button';
import SearchButton from './search-button';
import TabsBar from './tabs-bar';

import bound from 'Src/utils/bound';


const styles = {
	toolbar: {
		minHeight: '48px',
		'@media (min-width:1px) and (orientation: landscape)': {
			minHeight: '48px'
		},
		'@media (min-width:600px)': {
			minHeight: '48px'
		},
	},
	button: {
		paddingTop: 0,
		paddingBottom: 0,
		fontSize: '1.4rem',
		textTransform: 'none',
		marginRight: 'auto',
		borderRadius: 0,
		alignSelf: 'stretch',
		'@media (max-width: 600px)': {
			'&:hover': {
				backgroundColor: 'inherit'
			},
		},
	},
	logo: {
		width: '40px',
		height: '40px',
		marginRight: '8px',
	},
};


@withWidth()
@withStyles(styles)
class Header extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
	};

	constructor() {
		super();

		this.state = {
			activeTab: false,
		};
	}

	@bound
	handleTabChange(event, value) {
		this.setState({ activeTab: value });
	}

	@bound
	turnOffActiveTab() {
		this.setState({ activeTab: false });
	}

	render() {
		const { classes } = this.props;
		const logoProps = {
			className: classes.button,
			disableRipple: true,
			color: 'inherit',
			component: Link,
			to: '/',
			onClick: this.turnOffActiveTab,
		};

		return (
			<AppBar>
				<ToolBar classes={{ root: classes.toolbar }}>
					<Button {...logoProps}>
						<Logo className={classes.logo} />
						Канопус
					</Button>
					<Hidden xsDown>
						<TabsBar activeTab={this.state.activeTab} handleTabChange={this.handleTabChange} />
					</Hidden>
					<SearchButton />
					<NotificationsButton />
					<AccountButton />
				</ToolBar>
				<Hidden smUp>
					<ToolBar classes={{ root: classes.toolbar }}>
						<TabsBar activeTab={this.state.activeTab} handleTabChange={this.handleTabChange} />
					</ToolBar>
				</Hidden>
			</AppBar>
		);
	}
}


export default Header;