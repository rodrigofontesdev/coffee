import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, OrderInfo } from './styles'

import deliveryImg from '../../assets/images/ilustracao-entregador.svg'

export function Order() {
    return (
        <main>
            <Container>
                <div>
                    <header>
                        <h1>Uhu! Pedido confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </header>

                    <OrderInfo>
                        <div>
                            <ul>
                                <li>
                                    <span>
                                        <MapPin size={16} weight="fill" />
                                    </span>
                                    <p>
                                        Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                        <br />
                                        Centro Alto - Ribeirão Pires, SP
                                    </p>
                                </li>

                                <li>
                                    <span>
                                        <Timer size={16} weight="fill" />
                                    </span>
                                    <p>
                                        Previsão de entrega
                                        <br />
                                        <strong>20 min - 30 min</strong>
                                    </p>
                                </li>

                                <li>
                                    <span>
                                        <CurrencyDollar size={16} weight="regular" />
                                    </span>
                                    <p>
                                        Pagamento na entrega
                                        <br />
                                        <strong>Cartão de Crédito</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </OrderInfo>
                </div>

                <div>
                    <img
                        src={deliveryImg}
                        alt="Ilustração de um homem usando uma camiseta amarela, calça verde e tênis preto, dirigindo uma moto modelo Vespa na cor roxa"
                    />
                </div>
            </Container>
        </main>
    )
}
