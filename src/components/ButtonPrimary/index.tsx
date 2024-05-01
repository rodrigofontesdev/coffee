import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonPrimaryProps {
    children: ReactNode
    fill?: boolean
}

export function ButtonPrimary({ children, fill }: ButtonPrimaryProps) {
    return <Button $fill={fill}>{children}</Button>
}
