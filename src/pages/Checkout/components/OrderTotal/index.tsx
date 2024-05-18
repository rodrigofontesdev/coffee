import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { format } from '../../../../utils/functions/formatter'
import { Label, OrderTotalContainer, Price } from './styles'

export function OrderTotal() {
  const { fee, subtotal, total } = useContext(CartContext)

  return (
    <OrderTotalContainer>
      <Label>Total de itens</Label>
      <Price>R$ {format.price(subtotal)}</Price>

      <Label>Entrega</Label>
      <Price>R$ {format.price(fee)}</Price>

      <Label $bold>Total</Label>
      <Price $bold>R$ {format.price(total)}</Price>
    </OrderTotalContainer>
  )
}
