import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound '
import Layout from './pages/Layout'
import CategoryPage from './pages/CategoryPage'
import CategoriesPage from './pages/CategoriesPage'
import EditProduct from './pages/EditProduct'
import AddProductsPage from './pages/AddProductsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/update/:productId',
        element: <EditProduct />,
      },
      {
        path: '/products/add',
        element: <AddProductsPage />,
      },
      {
        path: '/categories/:categoryId',
        element: <CategoryPage />,
      },
      {
        path: '/products/:productId',
        element: <SingleProduct />,
      },
      {
        path: '*',
        component: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
