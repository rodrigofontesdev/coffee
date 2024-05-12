import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Actions, Cart, CartItems, HeaderContainer, Location } from './styles'

import logoImg from '../../assets/images/logo.svg'

export function Header() {
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
          <CartItems>3</CartItems>
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}
