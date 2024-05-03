import { ProductCard } from '../../components/ProductCard'
import { Hero } from './components/Hero'
import { Catalog, Items } from './styles'

export function Home() {
    return (
        <main>
            <Hero />

            <Catalog>
                <h1>Nossos cafés</h1>

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
