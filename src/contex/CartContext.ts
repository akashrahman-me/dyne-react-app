import { createContext } from 'react'
import type { Cart, LocalCart } from '../utilities/types'

interface IContextProps {
	cart: LocalCart[]
	handle: (value: Cart) => void
}

const CartContext = createContext({} as IContextProps)
export default CartContext
