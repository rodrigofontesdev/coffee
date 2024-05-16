import { Minus, Plus } from '@phosphor-icons/react'
import { DecrementButton, IncrementButton, InputGroup } from './styles'

interface InputNumberProps {
  quantity: number
  disableDecrementButton: boolean
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function InputNumber({
  quantity,
  disableDecrementButton,
  incrementQuantity,
  decrementQuantity,
}: InputNumberProps) {
  return (
    <InputGroup>
      <DecrementButton type="button" onClick={decrementQuantity} disabled={disableDecrementButton}>
        <Minus size={14} weight="bold" />
      </DecrementButton>

      <span>{quantity}</span>

      <IncrementButton type="button" onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </IncrementButton>
    </InputGroup>
  )
}
