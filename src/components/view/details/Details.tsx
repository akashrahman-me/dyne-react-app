import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import thumbnail from '../../../images/thumbnail-large.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import type { Cart } from '../../../utilities/types'
import { useContext } from 'react'
import CartContext from '../../../contex/CartContext'
import { useParams } from 'react-router-dom'

function Details() {
	const { handle, cart } = useContext(CartContext)
	const params = useParams()

	const navigate = useNavigate()
	const id = params?.id
	// const id = '60b36b79c3d5e02ae0d16b05'

	const { result } = useFetch(
		`https://dynebackend.herokuapp.com/dev/api/menuItem/${id}/byId`
	)
	const handleOrder = () => {
		handle(result)
		setTimeout(navigate, 2000, '/')
	}

	// 	{
	//   "subCategory": "",
	//   "_id": "60b36b79c3d5e02ae0d16b05",
	//   "restId": "60ade9ebce0a2dba97f16642",
	//   "name": "Absinthe Bistro's Famous Noodles",
	//   "category": "Food",
	//   "description": "Delicious, you would ask for another plate.",
	//   "imageUrl": "https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg",
	//   "prices": [
	//     {
	//       "price": 12,
	//       "optionalTitle": "Small"
	//     }
	//   ]
	// }

	return (
		<Box>
			<Box sx={{ px: 1 }}>
				<Typography
					component="h1"
					variant="h6"
					fontSize="28px"
					fontWeight="600"
					lineHeight="42px"
					color="text.primary"
					textAlign="center"
				>
					{result?.name}
					Beef dumpling in hot and sour soup
				</Typography>
				<Avatar
					variant="square"
					sx={{
						width: '80%',
						minWidth: 280,
						maxWidth: 300,
						height: '100%',
						px: 4,
						mx: 'auto',
						mt: 2,
					}}
					src={result?.imageUrl}
					alt={result?.name}
				/>
				<Typography
					component="h2"
					variant="h6"
					fontSize="28px"
					fontWeight="600"
					lineHeight="42px"
					textAlign="center"
					marginTop={2}
					marginBottom={2}
					color="primary.main"
				>
					${result?.prices?.[0]?.price}
				</Typography>
				<Box sx={{ mb: 2 }}>
					<Typography
						component="strong"
						variant="h6"
						fontWeight="500"
						color="text.primary"
						marginBottom={1}
					>
						Mains/Entrees
					</Typography>
					<Typography
						fontSize="14px"
						lineHeight="21px"
						color="text.secondary"
					>
						{result?.description}
					</Typography>
				</Box>
			</Box>
			<Button
				fullWidth
				variant="contained"
				sx={{
					px: 2,
					py: 1.875,
					fontSize: '18px',
					lineHeight: '27px',
					borderRadius: 2,
					backgroundImage: `linear-gradient(92.56deg, #D2042D 8.7%, #CB4044 94.65%)`,
					textTransform: 'none',
				}}
				onClick={handleOrder}
			>
				{cart.map(v => v.data._id).indexOf(result?._id) >= 0
					? 'Remove from order'
					: `Add to order for ${result?.prices?.[0]?.price}`}
			</Button>
		</Box>
	)
}

export default Details
