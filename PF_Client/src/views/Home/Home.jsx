import React, { useEffect } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Sections } from '../../components/Sections/Sections'
import { useDispatch } from 'react-redux'
import { getUserByEmail } from '../../Redux/actions'
import { useAuth0 } from "@auth0/auth0-react";


export const Home = () => {

  return (
    <div id='home'>
      <NavBar />
      <Carousel />
      <Sections />
      <div id='card'>
        <Card />
      </div>
      <BotonIrInicio />
      <Footer />
    </div>
  )
}
