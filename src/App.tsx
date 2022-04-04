import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/default'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Home from './components/view/home/Home'
import Details from './components/view/details/Details'
import Order from './components/view/order/Order'
import Summary from './components/view/summary/Summary'
import Status from './components/view/Status/Status'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/order" element={<Order />} />
						<Route path="/:id" element={<Details />} />
						<Route path="/summary" element={<Summary />} />
						<Route path="/status" element={<Status />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
