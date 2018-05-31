import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	lastElement: {
		color: theme.palette.secondary.main,
	},
});


function VerticalList({ classes, handleLiClick, path }) {
	return (
		<List component="nav">
			{path.map((element, index, array) => {
				const isLast = index === array.length - 1;

				return isLast ?
					<ListItem key={element.link}>
						<ListItemText classes={{ primary: classes.lastElement }} className="noselect" primary={element.name} />
					</ListItem> :
					<ListItem button component={Link} key={element.link} onClick={handleLiClick} to={element.link}>
						<ListItemText primary={element.name} />
					</ListItem>;
			})}
		</List>
	);
}

VerticalList.propTypes = {
	classes: PropTypes.object,
	handleLiClick: PropTypes.func.isRequired,
	path: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};


export default withStyles(styles)(VerticalList);