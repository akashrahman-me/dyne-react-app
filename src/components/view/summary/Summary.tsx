import { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useState } from 'react'
import mastercard from '../../../images/mastercard.png'
import visa from '../../../images/visa.png'
import more_horiz from '../../../images/more_horiz.png'
import IconButton from '@mui/material/IconButton'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { LocalCart, Pricing } from '../../../utilities/types'
import useFetchPost from '../../../hooks/useFetchPost'

const cards = [
	{
		id: 93483948,
		logo: visa,
		name: 'Visa xxxx 1265',
		expires: '12/23',
	},
	{
		id: 28328735,
		logo: mastercard,
		name: 'Mastercard xxxx 1726 ',
		expires: '12/24',
	},
]

function Summary() {
	const usefetchpost = useFetchPost()
	const location = useLocation()
	const navigate = useNavigate()
	const getState = location.state as {
		carts: LocalCart[]
		pricing: Pricing
		couponId: string
	}
	const listOfPricing = [
		{
			id: 873,
			key: 'Items',
			value: '0% off',
		},
		{
			id: 498,
			key: 'Discount',
			value: `$${getState?.pricing?.discount}`,
		},
		{
			id: 786,
			key: 'Tax',
			value: '$0.00',
		},
		{
			id: 121,
			key: 'Tip',
			value: `$${getState?.pricing?.tip}`,
		},
		{
			id: 233,
			key: 'Total',
			value: `$${getState?.pricing?.subtotal}`,
		},
	]

	useEffect(() => {
		if (getState?.carts === undefined || getState?.carts.length < 1) {
			navigate('/')
		}
	}, [getState])

	const [card, setCard] = useState<number>(cards[0]?.id)

	const submitOrder = () => {
		const submitData = {
			tableId: '',
			userId: '',
			restId: '',
			menuItemId: getState.carts,
			couponId: getState.couponId,
			paymentIntentId: card,
			meetupId: '',
			tip: getState.pricing.tip,
			startTime: 0,
			readyTime: 0,
			status: 'NewOrder',
		}
		usefetchpost(
			'https://dynebackend.herokuapp.com/dev/api/order/create',
			submitData,
			'POST',
			response => {
				console.log(response)
			}
		)
	}

	return (
		<Box sx={{ px: 1 }}>
			<Box>
				<Typography
					component="h2"
					fontWeight="500"
					fontSize="24px"
					lineHeight="36px"
					color="text.primary"
					marginBottom={2}
				>
					Order Summary
				</Typography>
				<Typography
					component="p"
					fontWeight="400"
					fontSize="16px"
					lineHeight="24px"
					color="text.secondary"
					marginBottom={2}
				>
					You will receive a notification once your order is ready at{' '}
					<Box component="span" sx={{ color: 'primary.main' }}>
						33 Acres
					</Box>
					.
				</Typography>
				<Typography
					component="p"
					fontWeight="400"
					fontSize="16px"
					lineHeight="24px"
					color="text.secondary"
					marginBottom={2}
				>
					Once you place your order, it will be sent to the kitchen for
					preparation.
				</Typography>
				<Box component="ul" sx={{ px: 0 }}>
					{listOfPricing.map(({ id, key, value }) => (
						<Box
							component="li"
							sx={{
								py: 1,
								display: 'flex',
								justifyContent: 'space-between',
							}}
							key={id}
						>
							<Typography
								fontSize="14px"
								lineHeight="18px"
								color="text.secondary"
								component="span"
								sx={{ flex: 1 }}
							>
								{key}
							</Typography>
							<Typography
								fontSize="16px"
								lineHeight="22px"
								color="text.primary"
								component="span"
								textAlign="right"
								fontWeight="500"
							>
								{value}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
			<Box sx={{ mt: 2.5 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography
						component="h3"
						color="text.primary"
						fontWeight="500"
						fontSize="20px"
						lineHeight="30px"
						sx={{ flex: '1' }}
					>
						Payment Methods
					</Typography>
					<Button
						variant="contained"
						sx={{
							px: 3,
							py: 1.2,
							fontSize: '12px',
							lineHeight: '18px',
							borderRadius: 2,
							fontWeight: '600',
							backgroundImage: `linear-gradient(92.56deg, #D2042D 8.7%, #CB4044 94.65%)`,
							textTransform: 'none',
						}}
					>
						+Add new
					</Button>
				</Box>
				{cards.map(({ id, logo, name, expires }) => (
					<Paper
						elevation={1}
						sx={{
							background: '#FAFAFA',
							p: 2,
							mt: 2,
							borderRadius: 3.5,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							cursor: 'pointer',
							border: 3,
							borderColor: id === card ? 'primary.main' : 'transparent',
							boxShadow: `0px 1.6896551847457886px 6.758620738983154px 0px #00000026`,
						}}
						key={id}
						onClick={() => setCard(id)}
					>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Box sx={{ mr: 2 }}>
								<Avatar
									variant="square"
									src={logo}
									alt={name}
									sx={{ width: 70 }}
								/>
							</Box>
							<Box>
								<Typography
									component="strong"
									fontSize="16px"
									lineHeight="24px"
									color="text.primary"
									display="block"
								>
									{name}
								</Typography>
								<Typography
									component="span"
									fontSize="13px"
									lineHeight="20px"
									color="text.secondary"
									fontWeight="300"
								>
									{expires}
								</Typography>
							</Box>
						</Box>
						<IconButton>
							<Avatar
								variant="square"
								src={more_horiz}
								alt="More"
								sx={{ width: 40, minWidth: 'auto' }}
							/>
						</IconButton>
					</Paper>
				))}
				<Box sx={{ mt: 2.5 }}>
					<Link
						to="/status"
						style={{
							textDecoration: 'none',
							color: '#007AFF',
							fontFamily: '"Poppins", sans-serif',
						}}
					>
						<Button
							fullWidth
							variant="contained"
							onClick={submitOrder}
							sx={{
								px: 2,
								py: 1.875,
								fontSize: '18px',
								lineHeight: '27px',
								borderRadius: 2,
								backgroundImage: `linear-gradient(92.56deg, #D2042D 8.7%, #CB4044 94.65%)`,
								textTransform: 'none',
							}}
						>
							Place Order
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}

export default Summary
