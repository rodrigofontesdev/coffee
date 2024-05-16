import { ReactNode, createContext, useState } from 'react'

interface CartItemProps {
  productId: number
  price: number
  quantity: number
}

interface CartContextProps {
  cartItems: number
  cart: CartItemProps[]
  addToCart: (product: CartItemProps) => void
  removeFromCart: (product: CartItemProps) => void
  updateCart: (product: CartItemProps) => void
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
  }

  function removeFromCart(product: CartItemProps) {
    const filteredCart = cart.filter((item) => item !== product)

    setCart(filteredCart)
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

  return (
    <CartContext.Provider value={{ cartItems, cart, addToCart, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  )
}
