import { Label, OrderTotalContainer, Price } from './styles'

export function OrderTotal() {
  return (
    <OrderTotalContainer>
      <Label>Total de itens</Label>
      <Price>R$ 29,70</Price>

      <Label>Entrega</Label>
      <Price>R$ 3,50</Price>

      <Label $bold>Total</Label>
      <Price $bold>R$ 33,20</Price>
    </OrderTotalContainer>
  )
}
