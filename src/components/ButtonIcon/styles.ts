import styled, { css } from 'styled-components'

interface ButtonProps {
  $variant?: 'purple' | 'yellow'
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 300ms ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.$variant) {
      case 'yellow': {
        return css`
          background-color: ${(props) => props.theme['yellow-800']};

          &:not(:disabled):hover {
            background-color: ${(props) => props.theme['yellow-500']};
          }
        `
      }
      default: {
        return css`
          background-color: ${(props) => props.theme['purple-900']};

          &:not(:disabled):hover {
            background-color: ${(props) => props.theme['purple-700']};
          }
        `
      }
    }
  }}

  svg {
    fill: ${(props) => props.theme.white};
  }
`
