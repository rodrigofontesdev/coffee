import { Trash } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { ButtonSecondary } from '../../../../components/ButtonSecondary'
import { InputNumber } from '../../../../components/Forms/InputNumber'
import { CartContext } from '../../../../contexts/CartContext'
import { ProductProps } from '../../../../utils/data/products'
import { format } from '../../../../utils/functions/formatter'
import { Actions, Details, Heading, ProductContainer } from './styles'

interface CartItemProps extends Pick<ProductProps, 'id' | 'title' | 'image' | 'price'> {
  quantity: number
}

interface ProductCardSimpleProps {
  product: CartItemProps
}

export function ProductCardSimple({ product }: ProductCardSimpleProps) {
  const { id, title, image, price, quantity } = product
  const [itemQuantity, setItemQuantity] = useState(quantity)
  const { removeFromCart } = useContext(CartContext)

  function handleIncrementQuantity() {
    setItemQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (itemQuantity > 1) {
      setItemQuantity((state) => state - 1)
    }
  }

  function handleRemoveProductFromCart() {
    removeFromCart(id)
  }

  const isDecrementButtonDisabled = itemQuantity === 1

  return (
    <ProductContainer>
      <img src={image} alt={title} />

      <Details>
        <Heading>
          <h3>{title}</h3>
          <span>R$ {format.price(price)}</span>
        </Heading>

        <Actions>
          <InputNumber
            quantity={itemQuantity}
            disableDecrementButton={isDecrementButtonDisabled}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <ButtonSecondary onClick={handleRemoveProductFromCart}>
            <Trash size={16} />
            Remover
          </ButtonSecondary>
        </Actions>
      </Details>
    </ProductContainer>
  )
}
