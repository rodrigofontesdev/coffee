import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ProductProps } from '../../utils/data/products'
import { format } from '../../utils/functions/formatter'
import { ButtonIcon } from '../ButtonIcon'
import { InputNumber } from '../Forms/InputNumber'
import { AddToCart, Buy, Heading, Price, ProductContainer, Tags } from './styles'

interface ProductCardProps {
  product: ProductProps
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, checkProductExistsInCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const { id, title, description, image, tags, price } = product

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddProductToCart() {
    addToCart({
      id,
      title,
      image,
      price,
      quantity,
    })
  }

  const isProductAddedToCart = checkProductExistsInCart(id)
  const isIncrementButtonDisabled = isProductAddedToCart
  const isDecrementButtonDisabled = isProductAddedToCart || quantity === 1

  return (
    <ProductContainer>
      <img src={image} alt={title} />

      <Tags>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </Tags>

      <Heading>
        <h3>{title}</h3>
        <p>{description}</p>
      </Heading>

      <Buy>
        <Price>
          R$ <span>{format.price(price, false)}</span>
        </Price>

        <AddToCart>
          <InputNumber
            quantity={quantity}
            disableIncrementButton={isIncrementButtonDisabled}
            disableDecrementButton={isDecrementButtonDisabled}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          {isProductAddedToCart ? (
            <ButtonIcon variant="yellow" disabled={true}>
              <CheckFat size={22} weight="fill" />
            </ButtonIcon>
          ) : (
            <ButtonIcon onClick={handleAddProductToCart}>
              <ShoppingCartSimple size={22} weight="fill" />
            </ButtonIcon>
          )}
        </AddToCart>
      </Buy>
    </ProductContainer>
  )
}
