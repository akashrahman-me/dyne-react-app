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

const productCategory1: ItemsDateline = [
	{
		id: 398493,
		image: thumbnail,
		title: 'Beef dumpling in hot and sour soup',
		price: 42.99,
	},
	{
		id: 845984,
		image: thumbnail,
		title: 'Beef dumpling in hot and sour soup',
		price: 42.99,
	},
	{
		id: 584575,
		image: thumbnail,
		title: 'Beef dumpling in hot and sour soup',
		price: 42.99,
	},
	{
		id: 125142,
		image: thumbnail,
		title: 'Beef dumpling in hot and sour soup',
		price: 42.99,
	},
]
const productCategory2: ItemsDateline = [
	{
		id: 598834,
		image: thumbnail,
		title: 'Spicy ramen with poached egg',
		price: 42.99,
	},
	{
		id: 43032940394,
		image: thumbnail,
		title: 'Spicy ramen with poached egg',
		price: 42.99,
	},
	{
		id: 49384,
		image: thumbnail,
		title: 'Spicy ramen with poached egg',
		price: 42.99,
	},
	{
		id: 23948394,
		image: thumbnail,
		title: 'Spicy ramen with poached egg',
		price: 42.99,
	},
]
const productCategory3: ItemsDateline = [
	{
		id: 2198378829,
		image: thumbnail,
		title: 'Shrimp noodles with spicy seafood',
		price: 42.99,
	},
	{
		id: 934903433,
		image: thumbnail,
		title: 'Shrimp noodles with spicy seafood',
		price: 42.99,
	},
	{
		id: 454985439,
		image: thumbnail,
		title: 'Shrimp noodles with spicy seafood',
		price: 42.99,
	},
	{
		id: 32403249,
		image: thumbnail,
		title: 'Shrimp noodles with spicy seafood',
		price: 42.99,
	},
]
const productCategory4: ItemsDateline = [
	{
		id: 242938423,
		image: thumbnail,
		title: 'Mushroom cream sauce pasta',
		price: 42.99,
	},
	{
		id: 234902394,
		image: thumbnail,
		title: 'Mushroom cream sauce pasta',
		price: 42.99,
	},
	{
		id: 2493784,
		image: thumbnail,
		title: 'Mushroom cream sauce pasta',
		price: 42.99,
	},
	{
		id: 23498324,
		image: thumbnail,
		title: 'Mushroom cream sauce pasta',
		price: 42.99,
	},
]
const productCategory5: ItemsDateline = [
	{
		id: 43248324,
		image: thumbnail,
		title: 'Fried rice with egg and vegetables',
		price: 42.99,
	},
	{
		id: 2934234,
		image: thumbnail,
		title: 'Fried rice with egg and vegetables',
		price: 42.99,
	},
	{
		id: 234234234,
		image: thumbnail,
		title: 'Fried rice with egg and vegetables',
		price: 42.99,
	},
	{
		id: 654654656,
		image: thumbnail,
		title: 'Fried rice with egg and vegetables',
		price: 42.99,
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
		<Box sx={{ px: 1 }}>
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
