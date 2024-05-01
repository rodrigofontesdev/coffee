import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonSecondaryProps {
    children: ReactNode
}

export function ButtonSecondary({ children }: ButtonSecondaryProps) {
    return <Button>{children}</Button>
}
