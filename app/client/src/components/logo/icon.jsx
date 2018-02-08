import PropTypes from 'prop-types';
import React from 'react';

import Color from 'color';

import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

import longTextShadow from 'Src/utils/long-text-shadow';


const styles = (theme) => {
	const size = 80;
	const bgColor = Color(theme.palette.secondary.main);
	const shadowColor = bgColor.darken(0.2).hex();

	return {
		logo: {
			width: size,
			height: size,
			fontSize: size,
			lineHeight: size + 'px',
			borderRadius: 5,
			margin: '10px 0',
			overflow: 'hidden',
			color: 'white',
			backgroundColor: bgColor.hex(),
			textShadow: longTextShadow(shadowColor, size / 2),
			boxShadow: '0px 2px 8px 1px rgba(0, 0, 0, 0.2)',
		},
	};
};


function LogoIcon({ classes }) {
	return <Icon className={classes.logo}>memory</Icon>;
}

LogoIcon.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LogoIcon);