import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0.75rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
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
    color: ${(props) => props.theme['purple-900']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    padding: 0.5rem;
    border-radius: 6px;

    svg {
        fill: ${(props) => props.theme['purple-700']};
    }
`

export const Cart = styled(Link)`
    display: flex;
    column-gap: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 0.5rem;
    border-radius: 6px;

    svg {
        fill: ${(props) => props.theme['yellow-800']};
    }
`

export const CartItems = styled.span`
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
    background-color: ${(props) => props.theme['yellow-800']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 100%;
`
