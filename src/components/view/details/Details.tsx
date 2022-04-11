import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import thumbnail from '../../../images/thumbnail-large.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import type { Cart } from '../../../utilities/types'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../../contex/CartContext'

function Details() {
	const { handle, cart } = useContext(CartContext)
	const params = useParams()

	const navigate = useNavigate()
	const id = params?.id
	const { result } = useFetch(
		`https://dynebackend.herokuapp.com/dev/api/menuItem/${id}/byId`
	)

	useEffect(() => {
		if (result !== null && result?.name === undefined) {
			navigate('/')
		}
	}, result)

	const handleOrder = () => {
		handle(result)
		setTimeout(navigate, 2000, '/')
	}

	return (
		<Box>
			<Box>
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
