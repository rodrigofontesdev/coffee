import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    column-gap: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['purple-900']};
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 300ms ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme['purple-700']};
    }

    svg {
        fill: ${(props) => props.theme.white};
    }
`
