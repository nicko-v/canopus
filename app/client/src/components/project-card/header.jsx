import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DirectoryIcon from '@material-ui/icons/Folder';
import DocumentIcon from '@material-ui/icons/Description';

import HeaderMenu from 'Src/containers/project-card-menu';


const styles = theme => ({
	avatar: {
		boxShadow: theme.shadows[1],
		height: 64,
		width: 64,
	},
	avatarIcon: {
		fontSize: 40,
	},
	avatarWrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
	},
	extension: {
		bottom: -20,
		left: '50%',
		position: 'absolute',
		textTransform: 'lowercase',
		transform: 'translateX(-50%)',
	},
	menu: {
		position: 'absolute',
		right: -16,
		top: -8,
	},
	title: {
		marginTop: 30,
		overflowX: 'hidden',
		width: '100%',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		textAlign: 'center',
	},
});


function HeaderWrapper({ children, className, id, isDocument }) {
	return isDocument ?
		<div className={className}>{children}</div> :
		<Link className={className} to={`/projects/${id}`}>{children}</Link>;
}

function CardHeader({ background, classes, extension, id, isDocument, name, number }) {
	const avatarStyle = background ? {
		background: background.avatar,
		color: '#fff',
	} : undefined;

	// Следовало бы сделать повышение регистра первой буквы через псевдоэлемент ::first-letter вместо JS,
	// но в таком случае на нее не действуют правила ::selection.
	name = name[0].toUpperCase() + name.slice(1);


	return (
		<div className={classes.wrapper}>
			<div className={classes.avatarWrapper}>
				<Avatar className={classes.avatar} style={avatarStyle}>
					{isDocument ?
						<DocumentIcon className={classes.avatarIcon} /> :
						<DirectoryIcon className={classes.avatarIcon} />
					}
				</Avatar>
				{isDocument && <Typography children={extension} className={classes.extension + ' noselect'} variant="caption" />}
			</div>
			<HeaderWrapper className={classes.title} id={id} isDocument={isDocument}>
				<Typography children={number} className={classes.uppercase} noWrap variant="subheading" />
				<Typography children={name} color="textSecondary" noWrap variant="subheading" />
			</HeaderWrapper>
			<HeaderMenu background={background} externalStyles={classes.menu} id={id} isDocument={isDocument} />
		</div>
	);
}

CardHeader.propTypes = {
	background: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		paper: PropTypes.string.isRequired,
	}),
	classes: PropTypes.object,
	extension: PropTypes.string,
	id: PropTypes.number,
	isDocument: PropTypes.bool,
	name: PropTypes.string,
	number: PropTypes.string,
};


export default withStyles(styles)(CardHeader);