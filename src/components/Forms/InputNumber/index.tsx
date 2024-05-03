import { Minus, Plus } from '@phosphor-icons/react'
import { InputGroup, MinusButton, PlusButton } from './styles'

export function InputNumber() {
    return (
        <InputGroup>
            <MinusButton type="button">
                <Minus size={14} weight="bold" />
            </MinusButton>

            <input type="tel" defaultValue={1} pattern="[0-9]+" />

            <PlusButton type="button">
                <Plus size={16} weight="bold" />
            </PlusButton>
        </InputGroup>
    )
}
