import React from 'react'
import Banner from './banner/Banner'
import Different from './different/Different'
import ProductMen from './productmen/ProductMen'
import ProductWomen from './productwomen/Productwomen'
import Related from './related/Related'

const Home = () => {
  return (
    <div>
      <Banner />
      <Different />
      <ProductMen />
      <ProductWomen />
      <Related/>
    </div>
  )
}

export default Home