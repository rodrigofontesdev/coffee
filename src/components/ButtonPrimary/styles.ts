import styled from 'styled-components'

export const Button = styled.button<{ $fill?: boolean }>`
    display: flex;
    column-gap: 0.25rem;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.$fill ? '100%' : 'auto')};
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.6;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    transition: background 300ms ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme['yellow-800']};
    }
`
