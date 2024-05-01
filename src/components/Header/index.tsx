import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Actions, Cart, CartItems, Container, Location } from './styles'

import logoImg from '../../assets/images/logo.svg'

export function Header() {
    return (
        <Container>
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
        </Container>
    )
}
