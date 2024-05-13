import { ShoppingCartSimple } from '@phosphor-icons/react'
import { ProductProps } from '../../utils/data/products'
import { format } from '../../utils/functions/formatter'
import { ButtonIcon } from '../ButtonIcon'
import { InputNumber } from '../Forms/InputNumber'
import { Buy, Heading, Price, ProductContainer, Quantity, Tags } from './styles'

interface ProductCardProps {
  product: ProductProps
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductContainer>
      <img src={product.image} alt={product.title} />

      <Tags>
        {product.tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </Tags>

      <Heading>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </Heading>

      <Buy>
        <Price>
          R$ <span>{format.price(product.price)}</span>
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
