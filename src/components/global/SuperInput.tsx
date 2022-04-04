import {styled} from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const SuperInput = styled(TextField)(({theme}) => ({
	fontSize: '15px',
	lineHeight: '21px',
	fontWeight: '500',
	borderRadius: '8px',
	width: 45,
	'& input': {
		height: 12,
	},
}))

export default SuperInput
