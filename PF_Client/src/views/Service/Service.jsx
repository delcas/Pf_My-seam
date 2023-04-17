import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { CardServices } from '../../components/CardService/CardServices'


export const Service = () => {
  return (
    <div>
      <NavBar />
      <CardServices/>
      <BotonIrInicio />
      <Footer />
    </div>
  )
}
