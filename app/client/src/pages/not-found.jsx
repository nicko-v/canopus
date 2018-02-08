import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';


const styles = {
	text: {
		margin: '100px auto 0',
		maxWidth: 600,
	},
};

function NotFound({ classes }) {
	return (
		<Grid container direction="column" alignItems="center" align="center" spacing={0} className={classes.text}>
			<Typography variant="display4">404</Typography>
			<Typography variant="display1" paragraph>Страница не&nbsp;найдена</Typography>
			<Typography variant="subheading">Проверьте корректность указанного адреса, либо воспользуйтесь навигационным меню для перехода в нужный раздел сайта</Typography>
		</Grid>
	);
}


export default withStyles(styles)(NotFound);