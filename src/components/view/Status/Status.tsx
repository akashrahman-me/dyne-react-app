import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown'
import { CountdownRendererFn } from 'react-countdown'

function Status() {
	const rendererTime = (get: any) => {
		const { hours, minutes, seconds } = get
		return (
			<span>
				{`${hours ? `${hours}:` : ''}${minutes ? `${minutes}:` : ''}${seconds}`}
			</span>
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
					Order Status
				</Typography>
				<Typography
					component="p"
					fontWeight="400"
					fontSize="16px"
					lineHeight="24px"
					color="text.secondary"
					marginBottom={2}
				>
					Congrats,{' '}
					<Box component="span" sx={{ color: 'primary.main' }}>
						your order has been placed!
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
					You are currently{' '}
					<Typography component="span" sx={{ color: 'primary.main' }}>
						#4
					</Typography>{' '}
					in the queue. There are{' '}
					<Typography component="span" sx={{ color: 'primary.main' }}>
						3 orders
					</Typography>{' '}
					ahead of you.
				</Typography>
				<Typography
					component="p"
					fontWeight="400"
					fontSize="16px"
					lineHeight="24px"
					color="text.secondary"
					marginBottom={2}
				>
					Your order contains items that will take about{' '}
					<Typography component="span" sx={{ color: 'primary.main' }}>
						{' '}
						15 minutes{' '}
					</Typography>{' '}
					to cook.
				</Typography>
				<Typography
					component="p"
					fontWeight="400"
					fontSize="16px"
					lineHeight="24px"
					color="text.secondary"
					marginBottom={2}
				>
					You will receive a notification when your order is being made and
					when the order is ready for pickup.
				</Typography>
				<Box sx={{ textAlign: 'center' }}>
					<Typography
						component="p"
						fontWeight="500"
						fontSize="20px"
						lineHeight="36px"
						color="text.primary"
						marginBottom={2}
					>
						Estimated Time Remaining
					</Typography>
					<Typography
						component="h2"
						fontWeight="500"
						fontSize="96px"
						lineHeight="120px"
						color="primary"
					>
						<Countdown date={Date.now() + 500000} renderer={rendererTime} />
					</Typography>
					<Typography
						component="p"
						fontWeight="500"
						fontSize="20px"
						lineHeight="36px"
						color="text.primary"
						marginBottom={2}
					>
						Table Number: #14
					</Typography>
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
						mb: 2,
					}}
				>
					View Order Summary
				</Button>
				<Link
					to="/"
					style={{
						textDecoration: 'none',
						color: '#007AFF',
						fontFamily: '"Poppins", sans-serif',
					}}
				>
					<Button
						fullWidth
						variant="text"
						sx={{
							px: 2,
							py: 1.875,
							fontSize: '18px',
							lineHeight: '27px',
							border: '0.5px solid #5A5A5A',
							borderRadius: 2,
							backgroundColor: 'white',
							textTransform: 'none',
							boxShadow: '0px 4px 20px 0px #0000001A',
							color: '#0A0A0A',
						}}
					>
						Done
					</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default Status
