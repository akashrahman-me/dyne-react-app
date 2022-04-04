import Box from '@mui/material/Box'

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`categories-tabpanel-${index}`}
			aria-labelledby={`categories-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

export default TabPanel
