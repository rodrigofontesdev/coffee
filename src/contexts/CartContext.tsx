import { ReactNode, createContext, useState } from 'react'
import { ProductProps } from '../utils/data/products'

interface CartItemProps extends Pick<ProductProps, 'id' | 'title' | 'image' | 'price'> {
  quantity: number
}

interface CartContextProps {
  cartItems: number
  cart: CartItemProps[]
  addToCart: (product: CartItemProps) => void
  removeFromCart: (productId: number) => void
  updateCart: (product: CartItemProps) => void
  checkProductExistsInCart: (productId: number) => boolean
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState(0)
  const [cart, setCart] = useState<CartItemProps[]>([])

  function addToCart(product: CartItemProps) {
    setCart((state) => [product, ...state])
    setCartItems((state) => state + 1)
  }

  function removeFromCart(productId: number) {
    const filteredCart = cart.filter((item) => item.id !== productId)

    setCart(filteredCart)
    setCartItems((state) => state - 1)
  }

  function updateCart(product: CartItemProps) {
    const updatedCart = cart.map((item) => {
      if (item === product) {
        return { ...item, quantity: product.quantity }
      }

      return item
    })

    setCart(updatedCart)
  }

  function checkProductExistsInCart(productId: number) {
    const product = cart.findIndex((item) => item.id === productId)

    return product >= 0
  }

  return (
    <CartContext.Provider
      value={{ cartItems, cart, addToCart, removeFromCart, updateCart, checkProductExistsInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
