import { ProductCard } from '../../components/ProductCard'
import { Hero } from './components/Hero'
import { Catalog, Items, Heading } from './styles'

export function Home() {
  return (
    <main>
      <Hero />

      <Catalog>
        <Heading>
          <h1>Nossos cafés</h1>

          <ul>
            <li>Tradicional</li>
            <li>Especial</li>
            <li>Com leite</li>
            <li>Alcoólico</li>
            <li>Gelado</li>
          </ul>
        </Heading>

        <Items>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Items>
      </Catalog>
    </main>
  )
}
