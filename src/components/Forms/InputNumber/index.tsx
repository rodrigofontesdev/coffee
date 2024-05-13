import { Minus, Plus } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'
import { DecrementButton, IncrementButton, InputGroup } from './styles'

export function InputNumber() {
  const [quantity, setQuantity] = useState(1)
  const isDecrementButtonDisabled = quantity === 1

  function handleInputQuantity(value: number) {
    const newQuantity = Math.max(quantity + value, 1)

    setQuantity(newQuantity)
  }

  function handleInputQuantityOnChange(e: ChangeEvent<HTMLInputElement>) {
    const newQuantity = Number(e.target.value)

    if (newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <InputGroup>
      <DecrementButton
        type="button"
        onClick={() => handleInputQuantity(-1)}
        disabled={isDecrementButtonDisabled}
      >
        <Minus size={14} weight="bold" />
      </DecrementButton>

      <input type="tel" pattern="[0-9]+" value={quantity} onChange={handleInputQuantityOnChange} />

      <IncrementButton type="button" onClick={() => handleInputQuantity(1)}>
        <Plus size={14} weight="bold" />
      </IncrementButton>
    </InputGroup>
  )
}
