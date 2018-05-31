import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import SignInForm from 'Src/components/auth/sign-in-form';

import bound from 'Src/utils/bound';

import AuthActions from 'Src/action-creators/auth';


const mapStateToProps = (state) => ({
	loginError: state.auth.si_loginError,
	passwordError: state.auth.si_passwordError,
});
const mapDispatchToProps = (dispatch) => ({
	signIn(formData) { dispatch(AuthActions.signInRequest(formData)); },
});


@connect(mapStateToProps, mapDispatchToProps)
class SignIn extends React.Component {
	static propTypes = {
		classes: PropTypes.object,
		loginError: PropTypes.string,
		passwordError: PropTypes.string,
		signIn: PropTypes.func.isRequired,
	};

	constructor() {
		super();

		this.state = {
			login: '',
			password: '',
		};
	}

	@bound
	handleInputChange(name) {
		return (event) => {
			this.setState({
				[name]: event.target.value,
			});
		};
	}

	@bound
	handleFormSubmit(event) {
		event.preventDefault();

		const { signIn } = this.props;
		const { login, password } = this.state;

		signIn({ login, password });
	}

	render() {
		const props = {
			onSubmit: this.handleFormSubmit,
			onInputChange: this.handleInputChange,
			login: this.state.login,
			password: this.state.password,
			loginError: this.props.loginError,
			passwordError: this.props.passwordError,
			classes: this.props.classes,
		};

		return <SignInForm {...props} />;
	}
}


export default SignIn;