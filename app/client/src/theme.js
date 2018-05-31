import { createMuiTheme } from '@material-ui/core/styles';

import jss from 'jss';
import jssPreset from 'jss-preset-default';

/* Основные цвета приложения */
import drawerBackground from '@material-ui/core/colors/grey';
import primary from '@material-ui/core/colors/brown';
import secondary from '@material-ui/core/colors/amber';
/* -=-=-=- */

/* Цвета карточек в зависимости от типа файла */
import autocadFile from '@material-ui/core/colors/red';
import imageFile from '@material-ui/core/colors/green';
import pcadFile from '@material-ui/core/colors/blue';
import pdfFile from '@material-ui/core/colors/deepPurple';
import solidworksFile from '@material-ui/core/colors/orange';
import unknownFile from '@material-ui/core/colors/grey';
/* -=-=-=- */

/* Интенсивность цвета карточки и иконки */
const projectPaperColor = 100;
const projectAvatarColor = 700;
/* -=-=-=- */


const autocadColors = {
	avatar: autocadFile[projectAvatarColor],
	paper: autocadFile[projectPaperColor],
};
const imageColors = {
	avatar: imageFile[projectAvatarColor],
	paper: imageFile[projectPaperColor],
};
const pcadColors = {
	avatar: pcadFile[projectAvatarColor],
	paper: pcadFile[projectPaperColor],
};
const pdfColors = {
	avatar: pdfFile[projectAvatarColor],
	paper: pdfFile[projectPaperColor],
};
const solidworksColors = {
	avatar: solidworksFile[projectAvatarColor],
	paper: solidworksFile[projectPaperColor],
};
const unknownColors = {
	avatar: unknownFile[projectAvatarColor],
	paper: unknownFile[projectPaperColor]
};

const theme = createMuiTheme({
	palette: {
		primary: {
			light: primary[300],
			midLight: primary[400],
			main: primary[500],
			midDark: primary[600],
			dark: primary[700],
		},
		secondary: {
			light: secondary[300],
			main: secondary[500],
			dark: secondary[700],
		},
		background: {
			default: primary[50],
		},
	},
	overrides: {
		MuiInput: {
			underline: {
				'&:after': {
					borderBottomColor: secondary[500],
				},
			},
		},
		MuiListItemIcon: {
			root: {
				marginRight: 0,
			},
		},
	},
	props: {
		MuiTooltip: {
			enterDelay: 200,
		},
	},
	custom: {
		actionBar: {
			height: 52,
		},
		appDrawer: {
			background: drawerBackground[200],
			breakpoint: 'md',
			width: 260,
		},
		extensionColor: {
			dwg: autocadColors,
			dxf: autocadColors,

			bmp: imageColors,
			gif: imageColors,
			jpg: imageColors,
			jpeg: imageColors,
			png: imageColors,
			psd: imageColors,

			pcb: pcadColors,

			pdf: pdfColors,

			igs: solidworksColors,
			sldasm: solidworksColors,
			sldprt: solidworksColors,

			unknown: unknownColors,
		},
		search: {
			breakpoint: 'sm',
		},
	},
});

const globalStyles = {
	'@global': {
		'*::selection': {
			background: theme.palette.secondary.main,
			color: theme.palette.secondary.contrastText,
		},
		'#root': {
			[theme.breakpoints.up(theme.custom.appDrawer.breakpoint)]: {
				paddingLeft: theme.custom.appDrawer.width,
			},
		},
		html: {
			caretColor: theme.palette.secondary.main,
		},
		'.link': {
			color: theme.palette.primary.dark,
			display: 'inline-block',
			maxWidth: '100%',
			position: 'relative',
			textDecoration: 'none',
			textOverflow: 'ellipsis',
			overflowX: 'hidden',
			whiteSpace: 'nowrap',
			'&:visited': {
				color: theme.palette.primary.dark,
			},
			'&::before': {
				background: theme.palette.primary.dark,
				bottom: 0,
				content: '""',
				height: 1,
				left: '50%',
				position: 'absolute',
				transform: 'translateX(-50%)',
				transition: 'width 300ms ease-in 10ms',
				width: 0,
			},
			'&::after': {
				borderBottom: `1px dotted ${theme.palette.primary.dark}`,
				bottom: 0,
				content: '""',
				left: 0,
				position: 'absolute',
				width: '100%',
			},
			'&:hover::before': {
				width: '100%',
			},
		},
	},
};

jss.setup(jssPreset());
jss.createStyleSheet(globalStyles).attach();


export default theme;