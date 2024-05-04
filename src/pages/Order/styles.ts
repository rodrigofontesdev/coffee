import styled from 'styled-components'

export const Container = styled.section`
    max-width: calc(70rem + 4.5rem);
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: end;
    padding: 5rem 2.25rem;
    margin-right: auto;
    margin-left: auto;

    & > div {
        width: 50%;
    }

    & > div:last-of-type {
        display: flex;
        justify-content: end;
    }

    header {
        margin-bottom: 2.5rem;

        h1 {
            color: ${(props) => props.theme['yellow-800']};
            font-size: 2rem;
            font-weight: 800;
            line-height: 1.3;
        }

        p {
            color: ${(props) => props.theme['gray-800']};
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1.3;
        }
    }
`

export const OrderInfo = styled.div`
    width: 100%;
    border: 1px solid transparent;
    background-image: ${(props) =>
        `linear-gradient(to bottom right, ${props.theme['yellow-500']}, ${props.theme['purple-700']})`};
    background-origin: border-box;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-left-radius: 6px;

    div {
        background-color: ${(props) => props.theme['gray-50']};
        padding: 2.5rem;
        border-top-right-radius: 36px;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 36px;
        border-top-left-radius: 6px;

        ul {
            display: flex;
            flex-direction: column;
            row-gap: 2rem;

            li {
                list-style: none;
                display: flex;
                align-items: center;
                column-gap: 0.75rem;
                font-weight: 400;
                line-height: 1.3;

                span {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: ${(props) => props.theme.white};
                    border-radius: 100%;
                }

                &:nth-of-type(1) {
                    span {
                        background-color: ${(props) => props.theme['purple-700']};
                    }
                }

                &:nth-of-type(2) {
                    span {
                        background-color: ${(props) => props.theme['yellow-500']};
                    }
                }

                &:nth-of-type(3) {
                    span {
                        background-color: ${(props) => props.theme['yellow-800']};
                    }
                }
            }
        }
    }
`
