import { ShoppingCartSimple } from '@phosphor-icons/react'
import { ButtonIcon } from '../ButtonIcon'
import { InputNumber } from '../Forms/InputNumber'
import {
    Amount,
    Buy,
    Container,
    Heading,
    Price,
    Quantity,
    Subtitle,
    Tag,
    Tags,
    Title,
} from './styles'

import productImg from '../../assets/images/products/expresso-tradicional.png'

export function ProductCard() {
    return (
        <Container>
            <img src={productImg} alt="Expresso Tradicional" />

            <Tags>
                <Tag>Especial</Tag>
                <Tag>Alcoólico</Tag>
                <Tag>Gelado</Tag>
            </Tags>

            <Heading>
                <Title>Expresso Tradicional</Title>
                <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>
            </Heading>

            <Buy>
                <Price>
                    R$ <Amount>9,90</Amount>
                </Price>

                <Quantity>
                    <InputNumber />
                </Quantity>

                <ButtonIcon>
                    <ShoppingCartSimple size={22} weight="fill" />
                </ButtonIcon>
            </Buy>
        </Container>
    )
}
