import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Sections } from '../../components/Sections/Sections'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail } from '../../redux/actions'
import { useAuth0 } from "@auth0/auth0-react";


export const Home = () => {
  const infoUser=useSelector(state=>state.userInfo);
  console.log(infoUser);

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
