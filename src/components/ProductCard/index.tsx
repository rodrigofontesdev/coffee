import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { ProductProps } from '../../utils/data/products'
import { format } from '../../utils/functions/formatter'
import { ButtonIcon } from '../ButtonIcon'
import { InputNumber } from '../Forms/InputNumber'
import { AddToCart, Buy, Heading, Price, ProductContainer, Tags } from './styles'

interface ProductCardProps {
  product: ProductProps
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

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

        <AddToCart>
          <InputNumber
            quantity={quantity}
            disableDecrementButton={quantity === 1}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <ButtonIcon>
            <ShoppingCartSimple size={22} weight="fill" />
          </ButtonIcon>
        </AddToCart>
      </Buy>
    </ProductContainer>
  )
}
