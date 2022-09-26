import React from 'react'
import HeaderCarousel from '../UI/Home/HeaderCarousel'
import Category from '../UI/Home/Category'
import BestSeller from '../UI/Home/BestSeller'
import NewArrival from '../UI/Home/NewArrival'

function Home() {
  return (
    <div>
        <HeaderCarousel/>
        <Category/>
        <NewArrival/>
        <BestSeller/>
        
    </div> 
  )
}

export default Home