import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { mutate } from '../../utils/functions/mutator'
import { Container, InfoRow, OrderInfo } from './styles'

import deliveryImg from '../../assets/images/ilustracao-entregador.svg'

export function Order() {
  const { order } = useCart()
  const navigate = useNavigate()
  const shipping = order?.shipping
  const billing = order?.billing

  useEffect(() => {
    if (!order) {
      navigate('/checkout')
    }
  }, [order, navigate])

  return (
    <main>
      <Container>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <div>
          <OrderInfo>
            <InfoRow>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <p>
                Entrega em{' '}
                <strong>
                  {shipping?.street}, {shipping?.streetNumber}
                  {shipping?.complement && ` - ${shipping?.complement}`}
                </strong>
                <br />
                {shipping?.neighborhood} - {shipping?.city}, {shipping?.state}
              </p>
            </InfoRow>

            <InfoRow>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </InfoRow>

            <InfoRow>
              <span>
                <CurrencyDollar size={16} />
              </span>
              <p>
                Pagamento na entrega
                <br />
                {billing?.paymentMethod && (
                  <strong>{mutate.paymentMethod(billing?.paymentMethod)}</strong>
                )}
              </p>
            </InfoRow>
          </OrderInfo>

          <div>
            <img
              src={deliveryImg}
              alt="Ilustração de um homem usando uma camiseta amarela, calça verde e tênis preto, dirigindo uma moto modelo Vespa na cor roxa"
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
