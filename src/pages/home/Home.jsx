import React from 'react'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/productApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  let {data, isLoading, error, isError} = useGetProductsQuery()
  return (
    <div>
      <Header/>
      <Navbar/>
      <Products data={data?.products}/>
      <Footer/>
    </div>
  )
}

export default Home