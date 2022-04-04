import {createTheme} from '@mui/material/styles'
export const theme = createTheme({
	palette: {
		primary: {
			light: '#CB4044',
			main: '#D2042D',
		},
		info: {
			main: '#007AFF',
		},
		text: {
			primary: '#333',
			secondary: '#666666',
		},
	},
	typography: {
		fontFamily: ['"Poppins"', 'sans-serif'].join(','),
	},
})
