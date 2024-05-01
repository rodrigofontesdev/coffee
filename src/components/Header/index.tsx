import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Actions, Cart, CartItems, HeaderContainer, Location } from './styles'

import logoImg from '../../../public/images/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logoImg} alt="Coffee Delivery" />
            </Link>

            <Actions>
                <Location>
                    <MapPin size={22} weight="fill" />
                    Ribeirão Pires, SP
                </Location>

                <Cart to="/checkout" role="button">
                    <ShoppingCart size={22} weight="fill" />
                    <CartItems>3</CartItems>
                </Cart>
            </Actions>
        </HeaderContainer>
    )
}
