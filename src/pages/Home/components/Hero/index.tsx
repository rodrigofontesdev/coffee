import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ContainerFluid, Content, Image, Perk, PerkIcon, Perks, Wrapper } from './styles'

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
            <Perk>
              <PerkIcon $variant="yellow-800">
                <ShoppingCart size={16} weight="fill" />
              </PerkIcon>
              Compra simples e segura
            </Perk>

            <Perk>
              <PerkIcon $variant="gray-700">
                <Package size={16} weight="fill" />
              </PerkIcon>
              Embalagem mantém o café intacto
            </Perk>

            <Perk>
              <PerkIcon $variant="yellow-500">
                <Timer size={16} weight="fill" />
              </PerkIcon>
              Entrega rápida e rastreada
            </Perk>

            <Perk>
              <PerkIcon $variant="purple-700">
                <Coffee size={16} weight="fill" />
              </PerkIcon>
              O café chega fresquinho até você
            </Perk>
          </Perks>
        </Content>

        <Image>
          <img src={heroImg} alt="" />
        </Image>
      </Wrapper>
    </ContainerFluid>
  )
}
