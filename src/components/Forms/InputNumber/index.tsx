import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonMinus, ButtonPlus, InputGroup } from './styles'

export function InputNumber() {
    return (
        <InputGroup>
            <ButtonMinus type="button">
                <Minus size={14} weight="bold" />
            </ButtonMinus>

            <input type="tel" defaultValue={1} pattern="[0-9]+" />

            <ButtonPlus type="button">
                <Plus size={16} weight="bold" />
            </ButtonPlus>
        </InputGroup>
    )
}
