import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import shopping_basket from '../../../images/shopping_basket.png'
import CartContext from '../../../contex/CartContext'
import { useContext } from 'react'

function CartView(props: { url: string }) {
	const { url } = props
	const { cart } = useContext(CartContext)

	return (
		<Link
			to={url}
			style={{
				textDecoration: 'none',
				color: '#007AFF',
				fontFamily: '"Poppins", sans-serif',
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					bottom: '2.5rem',
					right: '1rem',
					borderRadius: '50%',
					boxShadow: `0px 1px 4px rgba(0, 0, 0, 0.25)`,
					backgroundColor: 'white',
				}}
			>
				<Avatar
					sx={{
						width: 43,
						minWidth: 'auto',
						height: 43,
						padding: '5px',
						borderRadius: '50%',
						cursor: 'pointer',
					}}
					src={shopping_basket}
					alt="shopping_basket"
				/>
				<Box
					component="span"
					sx={{
						height: 28,
						minWidth: 12,
						fontSize: '20px',
						lineHeight: '30px',
						textAlign: 'center',
						fontWeight: '500',
						color: '#F2F3F2',
						px: 1,
						backgroundColor: 'primary.main',
						borderRadius: '50%',
						position: 'absolute',
						top: '-11px',
						right: '-9px',
					}}
				>
					{cart.length}
				</Box>
			</Box>
		</Link>
	)
}

export default CartView
