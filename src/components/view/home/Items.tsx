import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { stringToColor } from '../../../utilities/function'
import { useContext } from 'react'
import CartContext from '../../../contex/CartContext'
import type { Cart } from '../../../utilities/types'

function Items({ datam }: { datam: Cart[] }) {
	const { handle, cart } = useContext(CartContext)

	return (
		<Box sx={{ mt: 2.5, mx: -3 }}>
			<Grid container rowSpacing={2} columnSpacing={3} columns={2}>
				{datam.map(({ _id, imageUrl, name, prices }, index) => (
					<Grid item xs={1} key={_id}>
						<Paper
							sx={{
								textAlign: 'center',
								boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
								py: 1,
							}}
							elevation={1}
						>
							<Avatar
								variant="square"
								sx={{
									bgColor: stringToColor('title'),
									width: '85%',
									height: 'auto',
									minHeight: 100,
									margin: 'auto',
								}}
								alt={name}
								src={imageUrl}
							/>
							<Typography
								fontWeight="600"
								fontSize="12px"
								lineHeight="18px"
								component="strong"
								marginTop={2}
							>
								{name}
							</Typography>
							<Typography
								fontWeight="300"
								fontSize="12px"
								lineHeight="18px"
								color="text.primary"
								component="span"
								marginTop={1}
								marginBottom={1}
								display="block"
							>
								${prices[0].price}
							</Typography>
							<Button
								fullWidth
								variant="contained"
								sx={{
									px: 2,
									py: 1,
									fontSize: '12px',
									lineHeight: '18px',
									borderRadius: 2,
									backgroundImage: `linear-gradient(164.4deg, #CB4044 -0.44%, #D2042D 101.04%)`,
									mb: 0.5,
									textTransform: 'none',
								}}
								onClick={() => handle(datam[index])}
							>
								{cart.map(v => v.data._id).indexOf(datam[index]._id) >=
								0
									? 'Remove from order'
									: 'Add to order '}
							</Button>
							<Link
								to={`/${_id}`}
								style={{
									textDecoration: 'underline',
									color: '#007AFF',
									fontFamily: '"Poppins", sans-serif',
								}}
							>
								<Typography
									component="span"
									fontWeight="400"
									fontSize="10px"
									color="info.main"
								>
									View Details
								</Typography>
							</Link>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Items
