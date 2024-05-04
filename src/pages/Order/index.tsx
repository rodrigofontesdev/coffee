import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, InfoRow, OrderInfo } from './styles'

import deliveryImg from '../../assets/images/ilustracao-entregador.svg'

export function Order() {
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
                                Entrega em <strong>Rua Isidoro Fontes, 100</strong>
                                <br />
                                Centro Alto - Ribeirão Pires, SP
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
                                <strong>Cartão de Crédito</strong>
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
