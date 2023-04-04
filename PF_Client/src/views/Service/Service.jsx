import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Sections } from '../../components/Sections/Sections'
import { CardServices } from '../../components/CardService/CardServices'


export const Service = () => {
  return (
    <div id='service'>
      <NavBar />
      <Carousel />
      <Sections/>
      <div id='card'>
      <CardServices/>
      </div>
      <BotonIrInicio />
      <Footer />
    </div>
  )
}
