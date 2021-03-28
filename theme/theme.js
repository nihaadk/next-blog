import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#388e3c'
		},
		secondary: {
			main: '#aed581'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#eeeeee'
		}
	}
});

export default theme;
