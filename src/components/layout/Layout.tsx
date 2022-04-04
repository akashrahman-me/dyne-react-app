import { Outlet } from 'react-router-dom'
import CartContext from '../../contex/CartContext'
import { useState } from 'react'
import type { Cart, LocalCart } from '../../utilities/types'

function Layout() {
	const [cart, setCart] = useState<LocalCart[]>([])

	const handleCart = (value: Cart) => {
		setCart(o => {
			const oo = [...o]
			let assignable: Boolean = true
			oo.map((item, index) => {
				if (item.data._id === value._id) {
					oo.splice(index, 1)
					assignable = false
				}
			})

			if (assignable) {
				const createItem = {
					id: Math.trunc(Math.random() * 9999),
					quantity: 1,
					data: value,
				}
				oo.push(createItem)
			}

			return oo
		})
	}

	return (
		<CartContext.Provider value={{ cart, handle: handleCart }}>
			<Outlet />
		</CartContext.Provider>
	)
}

export default Layout
