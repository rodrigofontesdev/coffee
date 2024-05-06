import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.75rem;
    max-width: calc(70rem + 4.5rem);
    padding: 2rem 2.25rem;
    margin-right: auto;
    margin-left: auto;
`

export const Actions = styled.div`
    display: flex;
    column-gap: 0.75rem;
`

export const Location = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.25rem;
    background-color: ${(props) => props.theme['purple-300']};
    padding: 0.5rem;
    border-radius: 6px;

    svg {
        fill: ${(props) => props.theme['purple-700']};
    }

    span {
        color: ${(props) => props.theme['purple-900']};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3;
    }
`

export const Cart = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.25rem;
    position: relative;
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 0.5rem;
    border-radius: 6px;

    svg {
        fill: ${(props) => props.theme['yellow-800']};
    }
`

export const CartItems = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    background-color: ${(props) => props.theme['yellow-800']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 100%;
`
