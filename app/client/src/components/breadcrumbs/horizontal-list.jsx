import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	arrow: {
		fontSize: theme.typography.subheading.fontSize,
		overflow: 'visible',
	},
	link: {
		padding: '8px 10px',
		'&:hover': {
			color: theme.palette.secondary.main,
		},
	},
	linkSingle: {
		paddingLeft: 0,
	},
	pathElement: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
	},
	pushToNewLine: {
		height: '100%',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row-reverse',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		overflow: 'hidden',
	},
});


function HorizontalList({ classes, path }) {
	// Порядок меняется для того что бы строка пути "A > B > C" обрезалась по левому краю при нехватке места: "B > C".
	// Таким образом последний элемент пути (текущее место) всегда видим, а не переносится на скрытую строку.
	const reversePath = [...path].reverse();

	return (
		<div className={classes.wrapper}>
			<div className={classes.pushToNewLine} />{/* Позволяет перенести на вторую (скрытую) строку первый элемент если даже он не влезает. */}
			{reversePath.map((element, index, array) => {
				const isLast = index === 0;
				const isSingle = array.length === 1;

				return (
					<div className={classes.pathElement} key={element.link}>
						<Typography
							children={element.name}
							className={classNames(classes.link, { [classes.linkSingle]: isSingle, noselect: isLast })}
							color={isLast ? 'secondary' : 'inherit'}
							component={isLast ? undefined : Link}
							noWrap
							to={isLast ? undefined : element.link}
							variant="caption"
						/>
						{!isLast && <Icon children="chevron_right" className={classes.arrow} />}
					</div>
				);
			})}
		</div>
	);
}

HorizontalList.propTypes = {
	classes: PropTypes.object,
	path: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};


export default withStyles(styles)(HorizontalList);