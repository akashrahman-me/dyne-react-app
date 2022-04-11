import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import dolar from '../../../images/dolar.svg'
import time from '../../../images/Time.svg'
import thumb from '../../../images/image 1.png'

interface Props {
	active: Boolean
	item: any
	onClick?: () => void
}

function CouponItem({ active, item, onClick }: Props) {
	return (
		<Box onClick={onClick}>
			<Box
				sx={{
					boxShadow: 'box-shadow: 0px 0.5px 4px 0px #00000040',
					borderRadius: '12px',
					display: 'flex',
					mt: '30px',
					cursor: 'pointer',
					...(active ? { outline: '2px solid #bf3b40' } : {}),
				}}
			>
				<Box>
					<Box
						sx={{
							background:
								'linear-gradient(180deg, #D2042D 0%, #CB4044 100%)',
							borderRadius: '12px 0px 0px 12px',
							width: '13px',
							display: 'flex',
							alignItems: 'center',
							height: '100%',
						}}
					>
						<Box
							sx={{
								width: '7px',
								height: '14px',
								backgroundColor: 'white',
								borderRadius: '0px 10px 10px 0px',
							}}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						padding: '12px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Box>
						<Box sx={{ display: 'flex' }}>
							<Box>
								<Typography
									fontSize="18px"
									lineHeight="24px"
									color="primary.light"
									fontWeight="700"
								>
									33 Acres
								</Typography>
								<Typography
									fontWeight="600"
									fontSize="18px"
									lineHeight="24px"
									sx={{ color: '#0A0A0A' }}
								>
									{item?.dealInfo?.discountPercent} OFF
								</Typography>
								<Typography
									fontWeight="400"
									fontSize="14px"
									sx={{ color: '#0A0A0A' }}
								>
									{item?.description}
								</Typography>
								<Box sx={{ display: 'flex', mt: '8px' }}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<Box sx={{ mr: '5px' }}>
											<img
												src={time}
												width={21}
												height={21}
												style={{ display: 'block' }}
											/>
										</Box>
										<Typography
											fontSize="10px"
											lineHeight="16px"
											sx={{ color: '#0A0A0A' }}
										>
											{(() => {
												const timestamp = item?.expiryDate
												return new Date(timestamp).getHours()
											})()}
											hr
										</Typography>
									</Box>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											marginLeft: '24px',
										}}
									>
										<Box sx={{ mr: '5px' }}>
											<img
												src={dolar}
												width={21}
												height={21}
												style={{ display: 'block' }}
											/>
										</Box>
										<Typography
											fontSize="10px"
											lineHeight="16px"
											sx={{ color: '#0A0A0A' }}
										>
											{item?.costInPoints}
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box>
						<img src={item?.imageUrl} width={120} height="100%" />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default CouponItem
