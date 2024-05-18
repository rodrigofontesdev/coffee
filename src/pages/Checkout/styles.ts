import styled from 'styled-components'

export const Container = styled.section`
  max-width: calc(70rem + 4.5rem);
  padding: 2.5rem 2.25rem;
  margin-right: auto;
  margin-left: auto;
`

export const CheckoutForm = styled.form`
  width: 100%;
  flex-direction: row;
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Delivery = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.375rem;
  }
`

const WrapperBase = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const Address = styled(WrapperBase)`
  margin-bottom: 0.75rem;

  header {
    display: flex;
    column-gap: 0.625rem;

    svg {
      fill: ${(props) => props.theme['yellow-800']};
    }

    h3 {
      color: ${(props) => props.theme['gray-800']};
      font-family: ${(props) => props.theme['font-secondary']};
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const AddressFormFields = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem 0.75rem;

  > div {
    @media (max-width: 1024px) {
      grid-column: span 12;
    }
  }
`

export const InputGroup = styled.div<{ $cols?: number }>`
  display: flex;
  flex-direction: column;
  ${(props) => props.$cols && `grid-column: span ${props.$cols};`}
  position: relative;
`

export const InputControl = styled.input`
  background-color: ${(props) => props.theme['gray-200']};
  font-size: 0.875rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  transition: border 300ms ease-in-out;

  & + span {
    position: absolute;
    top: 0;
    right: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.75rem;
    font-style: italic;
    transform: translateY(100%);
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme['yellow-800']};

    &::placeholder {
      color: ${(props) => props.theme['gray-700']};
    }

    & + span {
      width: 1px;
      height: 1px;
      position: absolute;
      padding: 0;
      margin: -1px;
      border-width: 0;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme['gray-700']};
    -webkit-box-shadow: 0 0 0 40rem ${(props) => props.theme['gray-200']} inset;
  }
`

export const CheckGroup = styled(InputGroup)``

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background, border 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  & > svg {
    fill: ${(props) => props.theme['purple-700']};
    margin-top: -2px;
  }
`

export const CheckControl = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;

  &:checked + label {
    background-color: ${(props) => props.theme['purple-300']};
    border-color: ${(props) => props.theme['purple-700']};
  }
`

export const PaymentMethods = styled(WrapperBase)`
  header {
    display: flex;
    column-gap: 0.625rem;

    svg {
      fill: ${(props) => props.theme['purple-700']};
    }

    h3 {
      color: ${(props) => props.theme['gray-800']};
      font-family: ${(props) => props.theme['font-secondary']};
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    > div {
      display: grid;
    }
  }
`

export const Cart = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.375rem;
  }
`

export const Order = styled(WrapperBase)`
  border-radius: 6px 36px;
  row-gap: 0;
`
