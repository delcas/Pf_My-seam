import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'

export const Home = () => {
  return (
    <div id='home'>
      <NavBar />
      <BotonIrInicio />
      <Card />
      <Footer />
    </div>
  )
}
