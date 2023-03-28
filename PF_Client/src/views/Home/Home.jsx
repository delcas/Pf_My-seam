import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Filters } from '../../components/Filters/Filters'


export const Home = () => {
  return (
    <div id='home'>
      <NavBar />
      <Carousel />
      <Filters />
      <BotonIrInicio />
      <Card />
      <Footer />
    </div>
  )
}
