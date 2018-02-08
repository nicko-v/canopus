import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import View from 'Src/components/header/account-button';

import AuthActions from 'Src/action-creators/auth';


const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
	signOut() { dispatch(AuthActions.signOutRequest()); },
});


@connect(mapStateToProps, mapDispatchToProps)
class AccountButton extends React.Component {
	static propTypes = {
		user: PropTypes.shape({
			name: PropTypes.string,
			surname: PropTypes.string,
			patronym: PropTypes.string,
			username: PropTypes.string.isRequired,
		}),
	};

	render() {
		const { user, signOut } = this.props;
		const name = (Boolean(user.name) && Boolean(user.surname) && Boolean(user.patronym)) ?
			`${user.surname} ${user.name[0]}. ${user.patronym[0]}.` : user.username;

		return <View name={name} signOut={signOut} />;
	}
}


export default AccountButton;