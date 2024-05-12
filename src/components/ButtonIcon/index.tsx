import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from './styles'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonIcon({ children, ...rest }: ButtonIconProps) {
  return <Button {...rest}>{children}</Button>
}
