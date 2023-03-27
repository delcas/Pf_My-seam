import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Pagination } from '../../components/Pagination/Pagination'



export const Home = () => {
  return (
    <div id='home'>
      <NavBar />
      <Carousel />
      <BotonIrInicio />
      <Card />
      <Pagination />
      <Footer />
    </div>
  )
}
