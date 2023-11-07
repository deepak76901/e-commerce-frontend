import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/Product/ProductList'

function Home() {
  return (
    <div>
        <Navbar>
        </Navbar>
        <ProductList />
    </div>
  )
}

export default Home