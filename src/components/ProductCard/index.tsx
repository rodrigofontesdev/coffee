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

interface ItemProps {
  productId: number
  price: number
  quantity: number
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, checkProductExistsInCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItemToCart(item: ItemProps) {
    addToCart(item)
  }

  function isProductAddedToCart(productId: number) {
    return checkProductExistsInCart(productId)
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
            disableIncrementButton={isProductAddedToCart(product.id)}
            disableDecrementButton={quantity === 1 || isProductAddedToCart(product.id)}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          {isProductAddedToCart(product.id) ? (
            <ButtonIcon variant="yellow" disabled={true}>
              <CheckFat size={22} weight="fill" />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              onClick={() =>
                handleAddItemToCart({
                  productId: product.id,
                  price: product.price,
                  quantity,
                })
              }
            >
              <ShoppingCartSimple size={22} weight="fill" />
            </ButtonIcon>
          )}
        </AddToCart>
      </Buy>
    </ProductContainer>
  )
}
