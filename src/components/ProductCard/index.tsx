import { ShoppingCartSimple } from '@phosphor-icons/react'
import { ButtonIcon } from '../ButtonIcon'
import { InputNumber } from '../Forms/InputNumber'
import { Buy, Heading, Price, ProductContainer, Quantity, Tags } from './styles'

import productImg from '../../assets/images/products/expresso-tradicional.png'

export function ProductCard() {
  return (
    <ProductContainer>
      <img src={productImg} alt="Expresso Tradicional" />

      <Tags>
        <li>Especial</li>
        <li>Alcoólico</li>
        <li>Gelado</li>
      </Tags>

      <Heading>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Heading>

      <Buy>
        <Price>
          R$ <span>9,90</span>
        </Price>

        <Quantity>
          <InputNumber />
        </Quantity>

        <ButtonIcon>
          <ShoppingCartSimple size={22} weight="fill" />
        </ButtonIcon>
      </Buy>
    </ProductContainer>
  )
}
