import { zodResolver } from '@hookform/resolvers/zod'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import { ChangeEvent, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { CartContext } from '../../contexts/CartContext'
import { states } from '../../utils/data/states'
import { format } from '../../utils/functions/formatter'
import { EmptyCart } from './components/EmptyCart'
import { OrderTotal } from './components/OrderTotal'
import { ProductCardSimple } from './components/ProductCardSimple'
import {
  Address,
  AddressFormFields,
  Cart,
  CheckControl,
  CheckGroup,
  CheckLabel,
  CheckoutForm,
  Container,
  Delivery,
  InputControl,
  InputError,
  InputGroup,
  Order,
  PaymentMethods,
} from './styles'

const checkoutFormValidation = z.object({
  zipcode: z
    .string()
    .min(1, { message: 'O campo CEP é obrigatório' })
    .regex(/^\d{5}-\d{3}$/, {
      message: 'O formato do CEP é inválido',
    }),
  street: z.string().trim().min(1, { message: 'O campo rua é obrigatório' }),
  streetNumber: z.string().trim().min(1, { message: 'O campo número é obrigatório' }),
  complement: z.string().trim().nullable(),
  neighborhood: z.string().trim().min(1, { message: 'O campo bairro é obrigatório' }),
  city: z.string().trim().min(1, { message: 'O campo cidade é obrigatório' }),
  state: z
    .string()
    .trim()
    .length(2, { message: 'O campo UF é obrigatório' })
    .refine((value) => states.includes(value), { message: 'UF inválido' }),
  paymentMethod: z.enum(['creditCard', 'debitCard', 'cash'], {
    message: 'Selecione o método de pagamento',
  }),
})

export type CheckoutFormData = z.infer<typeof checkoutFormValidation>

export function Checkout() {
  const { cart, cartTotalItems, createOrder, fee, subtotal, total } = useContext(CartContext)
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(checkoutFormValidation),
    defaultValues: {
      zipcode: '',
      street: '',
      streetNumber: '',
      complement: null,
      neighborhood: '',
      city: '',
      state: '',
    },
  })
  const navigate = useNavigate()

  function handleSubmitCheckoutForm(data: CheckoutFormData) {
    if (cartTotalItems < 1) {
      return
    }

    const { zipcode, street, streetNumber, complement, neighborhood, city, state } = data
    const orderId = new Date().getTime()

    createOrder({
      orderId: orderId,
      items: cart,
      billing: {
        paymentMethod: data.paymentMethod,
        fee: fee,
        subtotal: subtotal,
        total: total,
      },
      shipping: { zipcode, street, streetNumber, complement, neighborhood, city, state },
    })

    navigate(`/order/${orderId}`)
  }

  const isCompleteOrderButtonDisabled = cartTotalItems === 0

  return (
    <main>
      <Container>
        <CheckoutForm onSubmit={handleSubmit(handleSubmitCheckoutForm)}>
          <Delivery>
            <h2>Complete seu pedido</h2>

            <Address>
              <header>
                <MapPinLine size={22} />

                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>

              <AddressFormFields>
                <InputGroup $cols={5}>
                  <InputControl
                    type="tel"
                    placeholder="CEP"
                    {...register('zipcode', {
                      onChange({ target }: ChangeEvent<HTMLInputElement>) {
                        setValue('zipcode', format.zipcode(target.value))
                      },
                    })}
                  />

                  {errors.zipcode && <InputError>{errors.zipcode.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={12}>
                  <InputControl type="text" placeholder="Rua" {...register('street')} />

                  {errors.street && <InputError>{errors.street.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl type="text" placeholder="Número" {...register('streetNumber')} />

                  {errors.streetNumber && <InputError>{errors.streetNumber.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={7}>
                  <InputControl type="text" placeholder="Complemento" {...register('complement')} />
                  <span>Opcional</span>

                  {errors.complement && <InputError>{errors.complement.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl type="text" placeholder="Bairro" {...register('neighborhood')} />

                  {errors.neighborhood && <InputError>{errors.neighborhood.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl type="text" placeholder="Cidade" {...register('city')} />

                  {errors.city && <InputError>{errors.city.message}</InputError>}
                </InputGroup>

                <InputGroup $cols={2}>
                  <InputControl
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    {...register('state', {
                      onChange({ target }: ChangeEvent<HTMLInputElement>) {
                        setValue('state', target.value.toUpperCase(), { shouldValidate: true })
                      },
                    })}
                  />

                  {errors.state && <InputError>{errors.state.message}</InputError>}
                </InputGroup>
              </AddressFormFields>
            </Address>

            <PaymentMethods>
              <header>
                <CurrencyDollar size={22} />

                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>

              <div>
                <CheckGroup>
                  <CheckControl
                    type="radio"
                    id="creditCard"
                    defaultValue="creditCard"
                    {...register('paymentMethod')}
                  />
                  <CheckLabel htmlFor="creditCard">
                    <CreditCard size={16} />
                    Cartão de crédito
                  </CheckLabel>
                </CheckGroup>

                <CheckGroup>
                  <CheckControl
                    type="radio"
                    id="debitCard"
                    defaultValue="debitCard"
                    {...register('paymentMethod')}
                  />
                  <CheckLabel htmlFor="debitCard">
                    <Bank size={16} />
                    Cartão de débito
                  </CheckLabel>
                </CheckGroup>

                <CheckGroup>
                  <CheckControl
                    type="radio"
                    id="cash"
                    defaultValue="cash"
                    {...register('paymentMethod')}
                  />
                  <CheckLabel htmlFor="cash">
                    <Money size={16} />
                    Dinheiro
                  </CheckLabel>
                </CheckGroup>

                {errors.paymentMethod && <InputError>{errors.paymentMethod.message}</InputError>}
              </div>
            </PaymentMethods>
          </Delivery>

          <Cart>
            <h2>Cafés selecionados</h2>

            <Order>
              {cartTotalItems > 0 ? (
                cart.map((product) => <ProductCardSimple key={product.id} product={product} />)
              ) : (
                <EmptyCart />
              )}

              <OrderTotal />

              <ButtonPrimary type="submit" fill disabled={isCompleteOrderButtonDisabled}>
                Confirmar Pedido
              </ButtonPrimary>
            </Order>
          </Cart>
        </CheckoutForm>
      </Container>
    </main>
  )
}
