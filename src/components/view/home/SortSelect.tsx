import { styled } from '@mui/material/styles'
import Select from '@mui/material/Select'

const SortSelect = styled(Select)(() => ({
	'& fieldset': {
		border: '0',
	},
}))

export default SortSelect
