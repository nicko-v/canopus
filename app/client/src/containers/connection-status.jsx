import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import View from 'Src/components/main-drawer/connection-status';


const mapStateToProps = (state) => ({ isConnected: state.websocket.isConnected });


@connect(mapStateToProps)
class ConnectionStatus extends React.Component {
	static propTypes = {
		isConnected: PropTypes.bool.isRequired,
	};

	render() {
		const { isConnected } = this.props;

		return <View isConnected={isConnected} />;
	}
}


export default ConnectionStatus;