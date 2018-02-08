import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import VertDivider from './vert-divider';


const styles = {
	wrapper: {
		padding: '16px',
		width: '100%',
	},
	typography: {
		marginTop: '16px',
		'&:first-child': {
			marginTop: 0,
		},
	},
	gridItem: {
		alignSelf: 'flex-start',
		wordBreak: 'break-all',
		textTransform: 'none',
	},
	gridCont: {
		padding: '8px',
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	litext: {
		padding: 0,
	},
	notFound: {
		display: 'none',
		'&:only-child': {
			display: 'block',
		},
	},
};


@withRouter
@withStyles(styles)
class SearchResults extends React.Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		results: PropTypes.object.isRequired,
	};

	navigate(to) {
		const { history } = this.props;

		return function () {
			history.push(to);
		};
	}

	render() {
		const { results, classes } = this.props;

		return (
			<div className={classes.wrapper}>
				{Object.entries(results).map(entry =>
					<React.Fragment key={entry[0]}>
						<Typography variant="subheading" color="textSecondary" className={classes.typography} gutterBottom>{entry[0]}</Typography>
						<Divider />
						{Object.entries(entry[1]).map(result =>
							<Grid container spacing={0} className={classes.gridCont} key={result[0]}>
								<Grid item sm={4} xs={12} component={Button} onClick={this.navigate(result[1].link)} className={classes.gridItem}>{result[0]}</Grid>
								<Grid item hidden={{ xsDown: true }} component={VertDivider} />
								<Grid item sm={8} xs={12} component={List} className={classes.list}>
									{result[1].content.map(content =>
										<ListItem dense button onClick={this.navigate(content.link)} key={content.title}>
											<ListItemText primary={content.title} secondary={content.subtitle ? `...${content.subtitle}...` : undefined} className={classes.litext} />
										</ListItem>
									)}
								</Grid>
							</Grid>
						)}
					</React.Fragment>
				)}
				<Typography variant="subheading" align="center" className={classes.notFound}>Ничего не найдено</Typography>
			</div>
		);
	}
}


export default SearchResults;