import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'
import { router } from './routes/Root'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
