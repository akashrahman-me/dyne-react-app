import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import thumbnail from '../../../images/thumbnail.png'
import CartView from './CartView'
import Items from './Items'
import TabPanel from './TabPanel'
import a11yProps from './a11yProps'
import SortSelect from './SortSelect'
import useFetch from '../../../hooks/useFetch'

type ItemsDateline = {
	id: number
	image: string
	title: string
	price: number
}[]

const tabs = [
	{
		id: 934839,
		name: 'Appetizers',
	},
	{
		id: 398434,
		name: 'Entrees',
	},
	{
		id: 459665,
		name: 'Drinks',
	},
	{
		id: 545485,
		name: 'Desserts',
	},
	{
		id: 548544,
		name: 'Deals',
	},
]

function App() {
	const [value, setValue] = useState(0)
	const [sort, setSort] = useState('')
	const changeSort = (event: any) => {
		setSort(event?.target?.value)
	}
	const items = useFetch(
		'https://dynebackend.herokuapp.com/dev/api/menuItem/getAll?limit=20'
	)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="fullWidth"
				>
					{tabs.map(({ id, name }, index) => (
						<Tab
							sx={{
								textTransform: 'Capitalize',
								fontWeight: value === index ? '600' : '400',
							}}
							label={name}
							{...a11yProps(index)}
							key={id}
						/>
					))}
				</Tabs>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					mt: 2,
				}}
			>
				<Typography
					component="h4"
					fontWeight="500"
					fontSize="20px"
					lineHeight="30px"
					color="text.primary"
				>
					Choose Items
				</Typography>
				<FormControl
					sx={{
						minWidth: 150,
						boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
					}}
				>
					{sort === '' && (
						<InputLabel
							sx={{
								height: 32,
								fontSize: '12px',
								lineHeight: '18px',
								transform: 'translate(50%, 22%)',
							}}
						>
							Sort by
						</InputLabel>
					)}
					<SortSelect
						value={sort}
						sx={{
							height: 32,
							fontSize: '12px',
							lineHeight: '18px',
						}}
						onChange={changeSort}
					>
						<MenuItem
							value="Item one"
							sx={{
								fontSize: '12px',
								lineHeight: '18px',
								minHeight: 'auto',
								height: '37px',
							}}
						>
							Sort by Name
						</MenuItem>
						<MenuItem
							value="Item two"
							sx={{
								fontSize: '12px',
								lineHeight: '18px',
								minHeight: 'auto',
								height: '30px',
							}}
						>
							Sort by Date
						</MenuItem>
					</SortSelect>
				</FormControl>
			</Box>
			<TabPanel value={value} index={0}>
				{items.result !== null && <Items datam={items.result} />}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/* <Items datam={productCategory2} /> */}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{/* <Items datam={productCategory3} /> */}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{/* <Items datam={productCategory4} /> */}
			</TabPanel>
			<TabPanel value={value} index={4}>
				{/* <Items datam={productCategory5} /> */}
			</TabPanel>
			<CartView url="/order" />
		</Box>
	)
}

export default App
