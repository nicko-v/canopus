import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import AppPreloader from 'Src/components/app-preloader/main';
import Header from 'Src/containers/header';
import MainDrawer from 'Src/containers/main-drawer';
import Loader from 'Src/containers/main-loader';
import Snackbar from 'Src/containers/snackbar';

import AuthPage from 'Src/pages/auth';
import DashboardPage from 'Src/pages/dashboard';
import IssuesPage from 'Src/pages/issues';
import NotFoundPage from 'Src/pages/not-found';
import ProjectsPage from 'Src/pages/projects';

import Auth_Actions from 'Src/action-creators/auth';


const mapStateToProps = state => ({
	isAuthorized: state.auth.isAuthorized,
});
const mapDispatchToProps = dispatch => ({
	restoreSession() { dispatch(Auth_Actions.sessionRestoreRequest()); },
});


function Wrapper({ children }) {
	return (
		<React.Fragment>
			{children}
			<Loader />
			<Snackbar />
		</React.Fragment>
	);
}


@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
	static propTypes = {
		isAuthorized: PropTypes.bool,
		restoreSession: PropTypes.func.isRequired,
	};

	componentDidMount() {
		const { restoreSession } = this.props;

		restoreSession();
	}

	render() {
		const { isAuthorized } = this.props;

		if (isAuthorized) {
			return (
				<Wrapper>
					<Header />
					<MainDrawer />
					<Switch>
						<Redirect exact from="/login" to="/" />
						<Route exact path="/" component={DashboardPage} />
						<Route exact path="/issues/:id([0-9]+)?" component={IssuesPage} />
						<Route exact path="/projects/:id([0-9]+)?" component={ProjectsPage} />
						<Route exact path="/not-found" component={NotFoundPage} />
						<Redirect to="/not-found" />
					</Switch>
				</Wrapper>
			);
		} else if (isAuthorized === false) {
			return (
				<Wrapper>
					<Switch>
						<Route exact path="/login" component={AuthPage} />
						<Redirect to="/login" />
					</Switch>
				</Wrapper>
			);
		} else { // Если undefined - значит еще не получен ответ сервера о восстановлении сессии.
			return <AppPreloader />;
		}
	}
}

export default App;