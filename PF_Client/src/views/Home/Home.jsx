import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { Carousel } from '../../components/Carousel/Carousel'
import { Sections } from '../../components/Sections/Sections'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail } from '../../redux/actions'



export const Home = ({ isAuthenticated, user }) => {
  // const infoUser=useSelector(state=>state.userInfo);
  // console.log(infoUser);

  return (
    <div id='home'>
      <NavBar isAuthenticated={isAuthenticated} user={user} />
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
