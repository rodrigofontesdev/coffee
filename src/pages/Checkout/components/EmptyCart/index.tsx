import { ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { CartContainer } from './styles'

export function EmptyCart() {
  return (
    <CartContainer>
      <ShoppingCart size={36} weight="fill" />

      <span>Seu carrinho está vazio!</span>

      <Link to="/">conheça nossos deliciosos cafés</Link>
    </CartContainer>
  )
}
