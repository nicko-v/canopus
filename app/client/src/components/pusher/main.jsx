import PropTypes from 'prop-types';
import React from 'react';


function Pusher({ classes, min = 'auto' }) {
	return <div style={{ flex: `1 0 ${min}` }} />;
}

Pusher.propTypes = {
	min: PropTypes.string,
};


export default Pusher;