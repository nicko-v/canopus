import React from 'react';

import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';


class Dashboard extends React.Component {
	componentDidMount() {
		document.title = 'Канопус';
	}

	render() {
		return (
			<Fade in>
				<Grid container className="animated fadeIn" component="main">

				</Grid>
			</Fade>
		);
	}
}


export default Dashboard;