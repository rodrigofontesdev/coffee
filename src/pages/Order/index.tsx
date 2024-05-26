import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { mutate } from '../../utils/functions/mutator'
import { Container, Illustration, Info, InfoIcon, OrderInfo, Row } from './styles'

import deliveryImg from '../../assets/images/ilustracao-entregador.svg'

export function Order() {
  const { order } = useCart()
  const navigate = useNavigate()
  const shipping = order?.shipping
  const billing = order?.billing

  useEffect(() => {
    if (!order) {
      navigate('/')
    }
  }, [order, navigate])

  return (
    <main>
      <Container>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <Row>
          <OrderInfo>
            <Info>
              <InfoIcon $variant="purple-700">
                <MapPin size={16} weight="fill" />
              </InfoIcon>

              <p>
                Entrega em{' '}
                {shipping?.street && (
                  <>
                    <strong>
                      {shipping?.street}, {shipping?.streetNumber}
                      {shipping?.complement && ` - ${shipping?.complement}`}
                    </strong>
                    <br />
                    {shipping?.neighborhood} - {shipping?.city}, {shipping?.state}
                  </>
                )}
              </p>
            </Info>

            <Info>
              <InfoIcon $variant="yellow-500">
                <Timer size={16} weight="fill" />
              </InfoIcon>

              <p>
                Previsão de entrega
                <br />
                {order && <strong>20 min - 30 min</strong>}
              </p>
            </Info>

            <Info>
              <InfoIcon $variant="yellow-800">
                <CurrencyDollar size={16} />
              </InfoIcon>

              <p>
                Pagamento na entrega
                <br />
                {billing?.paymentMethod && (
                  <strong>{mutate.paymentMethod(billing?.paymentMethod)}</strong>
                )}
              </p>
            </Info>
          </OrderInfo>

          <Illustration>
            <img
              src={deliveryImg}
              alt="Ilustração de um homem usando uma camiseta amarela, calça verde e tênis preto, dirigindo uma moto modelo Vespa na cor roxa"
            />
          </Illustration>
        </Row>
      </Container>
    </main>
  )
}
