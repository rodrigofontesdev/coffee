import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Root'

export default function App() {
  return <RouterProvider router={router} />
}
