import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ContainerFluid, Content, Image, Perks, Wrapper } from './styles'

import heroImg from '../../../../assets/images/coffee-delivery-mockup.svg'

export function Hero() {
  return (
    <ContainerFluid>
      <Wrapper>
        <Content>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <Perks>
            <li>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </li>

            <li>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>

            <li>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>

            <li>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </Perks>
        </Content>

        <Image>
          <img src={heroImg} alt="" />
        </Image>
      </Wrapper>
    </ContainerFluid>
  )
}
