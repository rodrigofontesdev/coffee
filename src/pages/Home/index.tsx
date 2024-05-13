import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { PRODUCTS, ProductProps, TAGS, productsByTag } from '../../utils/data/products'
import { Hero } from './components/Hero'
import { Catalog, Heading, Items, TagItem, Tags } from './styles'

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>(PRODUCTS)
  const [activeTag, setActiveTag] = useState('')

  function handleGetProductsByTag(tag: string) {
    const newProducts = productsByTag(tag)

    if (tag === activeTag) {
      setProducts(PRODUCTS)
      setActiveTag('')
    } else {
      setProducts([...newProducts])
      setActiveTag(tag)
    }
  }

  return (
    <main>
      <Hero />

      <Catalog>
        <Heading>
          <h1>Nossos cafés</h1>

          <Tags>
            {TAGS.map((tag) => {
              return (
                <TagItem
                  key={tag}
                  onClick={() => handleGetProductsByTag(tag)}
                  $isActive={activeTag === tag}
                >
                  {tag}
                </TagItem>
              )
            })}
          </Tags>
        </Heading>

        <Items>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </Items>
      </Catalog>
    </main>
  )
}
