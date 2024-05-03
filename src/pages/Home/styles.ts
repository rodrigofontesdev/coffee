import styled from 'styled-components'

export const Catalog = styled.section`
    max-width: calc(70rem + 4.5rem);
    padding: 2rem 2.25rem 11.25rem;
    margin-right: auto;
    margin-left: auto;

    h1 {
        color: ${(props) => props.theme['gray-800']};
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.3;
        margin-bottom: 4.125rem;
    }
`

export const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
