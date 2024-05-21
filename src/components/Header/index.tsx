import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Actions, Cart, CartItems, HeaderContainer, Location } from './styles'

import logoImg from '../../assets/images/logo.svg'

export function Header() {
  const { cartTotalItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <Actions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Ribeirão Pires, SP</span>
        </Location>

        <Cart to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {cartTotalItems > 0 && <CartItems>{cartTotalItems}</CartItems>}
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}
