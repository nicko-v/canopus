import { createMuiTheme } from 'material-ui/styles';
import { brown as primary, amber as secondary } from 'material-ui/colors';
import jss from 'jss';
import jssPreset from 'jss-preset-default';


const theme = createMuiTheme({
	palette: {
		primary: {
			light: primary[300],
			main: primary[500],
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
			inkbar: {
				'&:after': {
					backgroundColor: secondary[500],
				}
			},
			underline: {
				'&:hover:not($disabled):before': {
					backgroundColor: 'rgba(0, 0, 0, 0.42)',
				},
			},
		},
		MuiListItem: {
			divider: {
				borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
			},
		},
	},
});

const globalStyles = {
	'@global': {
		'*::selection': {
			backgroundColor: secondary[500],
		},
		html: {
			caretColor: secondary[500],
		},
	},
};

jss.setup(jssPreset());
jss.createStyleSheet(globalStyles).attach();


export default theme;