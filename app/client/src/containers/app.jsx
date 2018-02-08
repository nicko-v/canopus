import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Reboot from 'material-ui/Reboot';
import Snackbar from 'material-ui/Snackbar';

import Header from 'Src/components/header/main';
import MainLoader from 'Src/components/main-loader/main';
import MainSnackbar from 'Src/components/main-snackbar/main';

import AuthPage from 'Src/pages/auth';
import IssuesPage from 'Src/pages/issues';
import MainPage from 'Src/pages/main';
import NotFoundPage from 'Src/pages/not-found';
import ProfilePage from 'Src/pages/profile';
import ProjectsPage from 'Src/pages/projects';

import AuthActions from 'Src/action-creators/auth';


const mapStateToProps = (state) => ({
	isAuthorized: state.auth.isAuthorized,
	isMainLoaderActive: state.ui.isMainLoaderActive,
	isMainSnackbarActive: state.ui.isMainSnackbarActive,
	mainSnackbarMessage: state.ui.mainSnackbarMessage,
});
const mapDispatchToProps = (dispatch) => ({
	restoreSession() { dispatch(AuthActions.sessionRestoreRequest()); },
});


function Router() {
	return (
		<Switch>
			<Route exact path="/" component={MainPage} />
			<Route exact path="/projects" component={ProjectsPage} />
			<Route exact path="/issues" component={IssuesPage} />
			<Route exact path="/profile" component={ProfilePage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
}


@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class AppContainer extends React.Component {
	static propTypes = {
		isAuthorized: PropTypes.bool.isRequired,
		isMainLoaderActive: PropTypes.bool.isRequired,
		isMainSnackbarActive: PropTypes.bool.isRequired,
		mainSnackbarMessage: PropTypes.string,
	};

	componentDidMount() {
		const { restoreSession } = this.props;

		restoreSession();
	}

	render() {
		const { isAuthorized, isMainLoaderActive, isMainSnackbarActive, mainSnackbarMessage, classes } = this.props;

		return (
			<React.Fragment>
				<Reboot />
				{isMainLoaderActive && <MainLoader />}
				{isAuthorized && <Header />}
				{isAuthorized ? <Router /> : <AuthPage />}
				<MainSnackbar isActive={isMainSnackbarActive} message={mainSnackbarMessage} />
			</React.Fragment>
		);
	}
}


export default AppContainer;