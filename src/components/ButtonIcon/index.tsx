import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonIconProps {
    children: ReactNode
}

export function ButtonIcon({ children }: ButtonIconProps) {
    return <Button>{children}</Button>
}
