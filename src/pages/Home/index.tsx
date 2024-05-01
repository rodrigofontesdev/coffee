import { ShoppingCartSimple, Trash } from '@phosphor-icons/react'
import { ButtonIcon } from '../../components/ButtonIcon'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { ButtonSecondary } from '../../components/ButtonSecondary'

export function Home() {
    return (
        <div>
            <ButtonPrimary>Label</ButtonPrimary>

            <ButtonSecondary>
                <Trash size={16} />
                Remover
            </ButtonSecondary>

            <ButtonIcon>
                <ShoppingCartSimple
                    size={22}
                    weight="fill"
                />
            </ButtonIcon>
        </div>
    )
}
