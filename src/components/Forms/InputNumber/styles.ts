import styled from 'styled-components'

export const InputGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 0.25rem;
    max-width: 5.75rem;
    background-color: ${(props) => props.theme['gray-300']};
    padding: 0.5rem;
    border-radius: 6px;

    input {
        min-width: 1px;
        min-height: 22px;
        flex: 1;
        background-color: transparent;
        color: ${(props) => props.theme['gray-900']};
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
    }
`

export const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: fill 300ms ease-in-out;
`

export const MinusButton = styled(BaseButton)`
    svg {
        fill: ${(props) => props.theme['purple-700']};
    }

    &:hover svg {
        fill: ${(props) => props.theme['purple-900']};
    }
`

export const PlusButton = styled(BaseButton)`
    svg {
        fill: ${(props) => props.theme['purple-700']};
    }

    &:hover svg {
        fill: ${(props) => props.theme['purple-900']};
    }
`
