import { Trash } from '@phosphor-icons/react'
import { ButtonSecondary } from '../../../../components/ButtonSecondary'
import { InputNumber } from '../../../../components/Forms/InputNumber'
import { Actions, Details, Heading, ProductContainer } from './styles'

import productImg from '../../../../assets/images/products/expresso-tradicional.png'

export function ProductCardSimple() {
  return (
    <ProductContainer>
      <img src={productImg} alt="Expresso Tradicional" />

      <Details>
        <Heading>
          <h3>Expresso Tradicional</h3>
          <span>R$ 9,90</span>
        </Heading>

        <Actions>
          <InputNumber />

          <ButtonSecondary>
            <Trash size={16} />
            Remover
          </ButtonSecondary>
        </Actions>
      </Details>
    </ProductContainer>
  )
}
