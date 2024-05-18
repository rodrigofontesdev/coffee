import { ReactNode, createContext, useState } from 'react'
import { ProductProps } from '../utils/data/products'

interface CartItemProps extends Pick<ProductProps, 'id' | 'title' | 'image' | 'price'> {
  quantity: number
}

interface ItemQuantityProps {
  productId: number
  quantity: number
}

interface CartContextProps {
  cartItems: number
  cart: CartItemProps[]
  fee: number
  subtotal: number
  total: number
  addToCart: (product: CartItemProps) => void
  removeFromCart: (productId: number) => void
  updateCart: ({ productId, quantity }: ItemQuantityProps) => void
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

  function updateCart({ productId, quantity }: ItemQuantityProps) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity }
      }

      return item
    })

    setCart(updatedCart)
  }

  function checkProductExistsInCart(productId: number) {
    const product = cart.findIndex((item) => item.id === productId)

    return product >= 0
  }

  const fee = cart.length > 0 ? 3.5 : 0
  const subtotal = cart.reduce((acc, item) => {
    acc += item.price * item.quantity

    return acc
  }, 0)
  const total = subtotal + fee

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cart,
        fee,
        subtotal,
        total,
        addToCart,
        removeFromCart,
        updateCart,
        checkProductExistsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
