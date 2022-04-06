import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import logoN from '../../../images/DYNE new logo 1.svg'
import CouponItem from './CouponItem'

interface Props {
	visible: Boolean
	coupon: any
	handleCouponIndex: (index: number) => void
	couponIndex: number | Boolean
	toggleCouponVisible: () => void
}

function Coupon({
	visible,
	coupon,
	handleCouponIndex,
	couponIndex,
	toggleCouponVisible,
}: Props) {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 99,
				display: visible ? 'block' : 'none',
			}}
		>
			<Box
				sx={{
					background: `linear-gradient(164.4deg, #CB4044 -0.44%, #D2042D 101.04%)`,
					minHeight: '100vh',
				}}
			>
				<Box
					sx={{
						pt: '40px',
						pb: '24px',
					}}
				>
					<Typography
						sx={{ textAlign: 'center', color: 'white' }}
						fontSize="24px"
						fontWeight="500"
					>
						Select Coupons
					</Typography>
				</Box>
				<Box
					sx={{
						backgroundColor: 'white',
						px: '16px',
						py: '34px',
						boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						borderTopLeftRadius: '24px',
						borderTopRightRadius: '24px',
					}}
				>
					<Box sx={{ px: '10px' }}>
						<Box sx={{ display: 'flex', mb: '4px' }}>
							<Avatar
								src={logoN}
								sx={{ width: '41px', height: '43px' }}
							/>
							<Typography
								sx={{
									fontSize: '24px',
									lineHeihgt: '36px',
									color: '#0A0A0A',
									marginLeft: '14px',
								}}
							>
								Rewards
							</Typography>
						</Box>
						<Typography
							sx={{
								color: '#0A0A0A',
								lineheight: '17px',
								fontSize: '18px',
							}}
						>
							Earn points by scheduling meetups at eligible restaurants or
							eating at Dyne partnered restaurants.
						</Typography>
					</Box>
					<Box sx={{ mt: '4px' }}>
						{coupon?.result !== null &&
							coupon?.result?.map((item: any, index: number) => (
								<CouponItem
									key={item?._id || Math.random()}
									item={item}
									onClick={() => handleCouponIndex(index)}
									active={couponIndex === index}
								/>
							))}
					</Box>

					<Box sx={{ mt: '18px' }}>
						<Button
							onClick={toggleCouponVisible}
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
						>
							Continue
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Coupon
