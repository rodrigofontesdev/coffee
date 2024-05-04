import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Order } from '../pages/Order'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/order/:orderId', element: <Order /> },
        ],
    },
])
