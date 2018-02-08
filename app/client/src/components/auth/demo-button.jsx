import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import AuthActions from 'Src/action-creators/auth';


const styles = {
	button: {
		position: 'absolute',
		transform: 'translate(-50%, 50%)',
		left: '50%',
		bottom: '-35px',
	},
};
const mapDispatchToProps = (dispatch) => ({
	demoSignIn() { dispatch(AuthActions.demoSignIn()) },
});


function DemoButton({ classes, demoSignIn }) {
	return <Button size="small" onClick={demoSignIn} className={classes.button}>Демо</Button>;
}

DemoButton.propTypes = {
	classes: PropTypes.object.isRequired,
	demoSignIn: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(withStyles(styles)(DemoButton));