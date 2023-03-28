import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Filters } from '../../components/Filters/Filters'
import { Sections } from '../../components/Sections/Sections'


export const Home = () => {
  return (
    <div id='home'>
      <NavBar />
      <Carousel />
      <Sections />
      <Filters />
      <Card />
      <BotonIrInicio />
      <Footer />
    </div>
  )
}
