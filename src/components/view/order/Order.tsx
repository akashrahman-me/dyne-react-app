import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import deleteIcon from '../../../images/Trash.png'
import SuperInput from '../../global/SuperInput'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../../contex/CartContext'
import { useContext } from 'react'
import Coupon from './Coupon'
import type { LocalCart, Pricing } from '../../../utilities/types'
import useFetch from '../../../hooks/useFetch'
import CouponItem from './CouponItem'

const tips = [0, 10, 20, 25, 50, 75]
let couponId = ''

function Order() {
	const navigate = useNavigate()
	const [tipIndex, setTipIndex] = useState<any>(false)
	const handleTip = (index: number) => setTipIndex(index)

	const coupon = useFetch(
		'https://dynebackend.herokuapp.com/dev/api/coupon/getAll?limit=5'
	)

	const [couponVisible, setCouponVisible] = useState<Boolean>(false)
	const toggleCouponVisible = () => setCouponVisible((v: Boolean) => !v)
	const [couponIndex, setCouponIndex] = useState<any>(false)
	const handleCouponIndex = (index: number) => {
		setCouponIndex(index)
	}

	const getCarts = useContext(CartContext)
	const [carts, setCarts] = React.useState<LocalCart[]>(getCarts.cart)

	useEffect(() => {
		if (getCarts.cart && getCarts.cart.length < 1) {
			navigate('/')
		}
	}, carts)

	const quantityHandle = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index: number
	) => {
		let quantityNumber = parseInt(e.currentTarget.value)
		if (!quantityNumber) quantityNumber = 1

		setCarts(pv => {
			let carts = [...pv]
			carts[index].quantity = quantityNumber
			return carts
		})
	}

	const deleteCart = (index: number) => {
		if (window.confirm('Are you sure to delete is? ')) {
			setCarts(pv => {
				let carts = [...pv]
				carts.splice(index, 1)
				if (carts.length <= 0) {
					window.location.href = '/'
				}
				return carts
			})
		}
	}

	let total = 0
	carts.map(({ quantity, data }) => {
		total += quantity * data.prices[0].price
	})

	const pricing: Pricing = {
		discount: 0.0,
		tip: 0.0,
		subtotal: total,
		coupon: 0,
	}

	if (coupon?.result && coupon?.result !== null && couponIndex !== false) {
		couponId = coupon?.result?.[couponIndex]?._id
		const percentage = coupon?.result?.[couponIndex]?.dealInfo?.discountPercent
		pricing.coupon = parseInt(percentage.toFixed(2))
		pricing.discount = (total / 100) * percentage
		pricing.subtotal = parseInt((total - pricing.discount).toFixed(2))
	}

	if (tipIndex !== false) {
		pricing.tip = parseInt(((total / 100) * tips[tipIndex]).toFixed(2))

		pricing.subtotal = parseInt((total + pricing.tip).toFixed(2))
	}

	const FooterText = [
		{
			id: 343948,
			key: 'Coupon applied',
			value: `${pricing.coupon ?? '-'}%`,
		},
		{
			id: 93948,
			key: 'Discount',
			value: `$${pricing.discount}`,
		},
		{
			id: 73873,
			key: 'Tip',
			value: `$${pricing.tip}`,
		},
		{
			id: 165265,
			key: 'Sub total',
			value: `$${pricing.subtotal}`,
		},
	]

	return (
		<Box>
			<Coupon
				visible={couponVisible}
				toggleCouponVisible={toggleCouponVisible}
				handleCouponIndex={handleCouponIndex}
				couponIndex={couponIndex}
				coupon={coupon}
			/>
			<Box>
				<Typography
					color="text.primary"
					fontWeight="500"
					fontSize="24px"
					lineHeight="33px"
					component="h3"
					marginBottom={2}
				>
					Orders #34562
				</Typography>
			</Box>
			<Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'auto 60px 60px',
						gap: '8px',
						alignItems: 'center',
					}}
				>
					<Typography
						color="text.primary"
						fontWeight="600"
						fontSize="14px"
						lineHeight="20px"
						component="h3"
					>
						Item
					</Typography>
					<Typography
						color="text.primary"
						fontWeight="600"
						fontSize="14px"
						lineHeight="20px"
						component="h3"
						textAlign="center"
					>
						Qty
					</Typography>
					<Typography
						color="text.primary"
						fontWeight="600"
						fontSize="14px"
						lineHeight="20px"
						component="h3"
						textAlign="right"
					>
						Price
					</Typography>
					{carts.map(({ id, data, quantity }, index) => (
						<React.Fragment key={id}>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Avatar
									variant="square"
									sx={{ width: 38, height: 38 }}
									src={data.imageUrl}
									alt={data.name}
								/>
								<Box sx={{ ml: 1 }}>
									<Typography
										fontWeight="500"
										fontSize="13px"
										lineHeight="17px"
										component="span"
										color="text.primary"
										noWrap
										textOverflow="ellipsis"
										overflow="hidden"
										display="block"
									>
										{data.name || 'Name Undefined'}
									</Typography>
									<Typography
										fontWeight="500"
										fontSize="11px"
										lineHeight="16px"
										component="span"
										color="text.secondary"
									>
										${data.prices[0].price}
									</Typography>
								</Box>
							</Box>
							<Box sx={{ textAlign: 'right' }}>
								<SuperInput
									value={quantity}
									onChange={e => quantityHandle(e, index)}
									inputProps={{
										sx: {
											textAlign: 'center',
										},
										itemType: 'number',
									}}
								/>
							</Box>
							<Box>
								<Typography
									component="b"
									display="block"
									color="text.primary"
									fontSize="15px"
									lineHeight="21px"
									textAlign="right"
									fontWeight="500"
									noWrap
								>
									${quantity * data.prices[0].price}
								</Typography>
							</Box>
							<SuperInput
								defaultValue="Please, just a little bit spicy only."
								sx={{
									gridColumnStart: 1,
									gridColumnEnd: 3,
									width: '100%',
								}}
							/>
							<Box sx={{ textAlign: 'right' }}>
								<Button
									fullWidth
									variant="contained"
									sx={{
										padding: 2,
										fontSize: '12px',
										lineHeight: '18px',
										borderRadius: 2,
										backgroundImage: `linear-gradient(164.4deg, #CB4044 -0.44%, #D2042D 101.04%)`,
										height: 45,
										width: 45,
										minWidth: 'auto',
										textTransform: 'none',
									}}
									onClick={() => deleteCart(index)}
								>
									<Avatar
										sx={{ width: 19, height: 19, minWidth: 'auto' }}
										src={deleteIcon}
										alt="delete"
									/>
								</Button>
							</Box>
						</React.Fragment>
					))}
				</Box>

				<Box sx={{ mt: 2 }}>
					<Button
						onClick={toggleCouponVisible}
						fullWidth
						variant="contained"
						color="primary"
						sx={{
							px: 2,
							py: 1.875,
							fontSize: '18px',
							lineHeight: '27px',
							borderRadius: 2,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							textTransform: 'none',
						}}
					>
						<span style={{ textAlign: 'center', flex: '1' }}>
							Add a Coupon
						</span>
						<Typography
							component="span"
							sx={{
								fontSize: '36px',
								lineHeight: '27px',
							}}
						>
							+
						</Typography>
					</Button>
					<Box sx={{ mb: 3 }}>
						{coupon?.result &&
							coupon?.result !== null &&
							couponIndex !== false && (
								<CouponItem
									item={coupon?.result?.[couponIndex]}
									active
								/>
							)}
					</Box>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography
						component="b"
						color="text.primary"
						fontWeight="500"
						fontSize="14px"
						lineHeight="18px"
					>
						Tip
					</Typography>
					<Box
						sx={{
							mt: 1.25,
							display: 'flex',
							justifyContent: 'space-between',
							mx: -1,
						}}
					>
						{tips.map((v, i) => (
							<SuperInput
								onClick={() => handleTip(i)}
								key={Math.random()}
								value={`${v}%`}
								sx={{
									borderRadius: 1,
									width: 100 / tips.length + '%',
									height: 36,
									mx: 1,
									'& input': {
										textAlign: 'center',
										px: 0,
									},
									...(i === tipIndex && {
										'& .MuiOutlinedInput-notchedOutline': {
											border: `2px solid #d2042d`,
										},
									}),
								}}
							/>
						))}
					</Box>
					<Box component="ul" sx={{ mt: 2, px: 0 }}>
						{FooterText.map(({ id, key, value }) => (
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
				<Box sx={{ mt: 2 }}>
					<Link
						to="/summary"
						state={{ carts, pricing, couponId }}
						style={{
							textDecoration: 'none',
							color: '#007AFF',
							fontFamily: '"Poppins", sans-serif',
						}}
					>
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
						>
							Confirm Order
						</Button>
					</Link>
				</Box>
				<br />
			</Box>
		</Box>
	)
}

export default Order
