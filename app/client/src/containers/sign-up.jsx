import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import SignUpForm from 'Src/components/auth/sign-up-form';

import bound from 'Src/utils/bound';

import AuthActions from 'Src/action-creators/auth';


const mapStateToProps = (state) => ({
	loginError: state.auth.su_loginError,
	passwordError: state.auth.su_passwordError,
});
const mapDispatchToProps = (dispatch) => ({
	signUp(formData) { dispatch(AuthActions.signUpRequest(formData)); },
});


@connect(mapStateToProps, mapDispatchToProps)
class SignUp extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		loginError: PropTypes.string,
		passwordError: PropTypes.string,
		signUp: PropTypes.func.isRequired,
	};

	constructor() {
		super();

		this.state = {
			login: '',
			password: '',
			passwordRepeat: '',
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

		const { signUp } = this.props;
		const { login, password, passwordRepeat } = this.state;

		signUp({ login, password, passwordRepeat });
	}

	render() {
		const props = {
			onSubmit: this.handleFormSubmit,
			onInputChange: this.handleInputChange,
			login: this.state.login,
			password: this.state.password,
			passwordRepeat: this.state.passwordRepeat,
			loginError: this.props.loginError,
			passwordError: this.props.passwordError,
			classes: this.props.classes,
		};

		return <SignUpForm {...props} />;
	}
}


export default SignUp;