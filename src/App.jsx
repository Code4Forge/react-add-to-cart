import React from 'react'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/'>
          <Route index element={<Products />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App