import { zodResolver } from '@hookform/resolvers/zod'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { Input } from '../../components/Forms/Input'
import { InputRadio } from '../../components/Forms/InputRadio'
import { useCart } from '../../hooks/useCart'
import { states } from '../../utils/data/states'
import { format } from '../../utils/functions/formatter'
import { EmptyCart } from './components/EmptyCart'
import { OrderTotal } from './components/OrderTotal'
import { ProductCardSimple } from './components/ProductCardSimple'
import {
  Address,
  AddressFields,
  Cart,
  CheckoutForm,
  Container,
  Delivery,
  InputRadioError,
  Order,
  PaymentMethods,
  PaymentMethodsFields,
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
  const { cart, cartTotalItems, createOrder, fee, subtotal, total } = useCart()
  const navigate = useNavigate()
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

              <AddressFields>
                <Input
                  columns={5}
                  type="tel"
                  placeholder="CEP"
                  error={errors.zipcode && errors.zipcode.message}
                  {...register('zipcode', {
                    onChange({ target }: ChangeEvent<HTMLInputElement>) {
                      setValue('zipcode', format.zipcode(target.value))
                    },
                  })}
                />

                <Input
                  columns={12}
                  type="text"
                  placeholder="Rua"
                  error={errors.street && errors.street.message}
                  {...register('street')}
                />

                <Input
                  columns={5}
                  type="text"
                  placeholder="Número"
                  error={errors.streetNumber && errors.streetNumber.message}
                  {...register('streetNumber')}
                />

                <Input
                  columns={7}
                  type="text"
                  placeholder="Complemento"
                  optional
                  error={errors.complement && errors.complement.message}
                  {...register('complement')}
                />

                <Input
                  columns={5}
                  type="text"
                  placeholder="Bairro"
                  error={errors.neighborhood && errors.neighborhood.message}
                  {...register('neighborhood')}
                />

                <Input
                  columns={5}
                  type="text"
                  placeholder="Cidade"
                  error={errors.city && errors.city.message}
                  {...register('city')}
                />

                <Input
                  columns={2}
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  error={errors.state && errors.state.message}
                  {...register('state', {
                    onChange({ target }: ChangeEvent<HTMLInputElement>) {
                      setValue('state', target.value.toUpperCase(), { shouldValidate: true })
                    },
                  })}
                />
              </AddressFields>
            </Address>

            <PaymentMethods>
              <header>
                <CurrencyDollar size={22} />

                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>

              <PaymentMethodsFields>
                <InputRadio
                  id="creditCard"
                  defaultValue="creditCard"
                  {...register('paymentMethod')}
                >
                  <CreditCard size={16} />
                  Cartão de crédito
                </InputRadio>

                <InputRadio id="debitCard" defaultValue="debitCard" {...register('paymentMethod')}>
                  <Bank size={16} />
                  Cartão de débito
                </InputRadio>

                <InputRadio id="cash" defaultValue="cash" {...register('paymentMethod')}>
                  <Money size={16} />
                  Dinheiro
                </InputRadio>

                {errors.paymentMethod && (
                  <InputRadioError>{errors.paymentMethod.message}</InputRadioError>
                )}
              </PaymentMethodsFields>
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
