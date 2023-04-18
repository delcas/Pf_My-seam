import React, { useState } from "react";
import { BsEmojiLaughing, BsStar, BsStarFill } from "react-icons/bs";
import styles from "../Review/Review.module.css"
import {Button} from '@chakra-ui/react'
import Star from "./Stars"
import { Link } from 'react-router-dom';

const Review = ()=>{
  const [rating, setRating] = useState(0);

  const locationData = (window.location.href).split('/')
  let tipo = locationData[(locationData.length)-2]
  let ratedId =  locationData[(locationData.length)-1]
  
  function rate (){
    try {
      
      alert(`Su review de ${rating} estrellas \nfue agregado con exito \nen el ${tipo.slice(0,7)} con id:${ratedId}`)
    } catch (error) {
      alert(error.message)
    }    
  }
 
  return(    
      <table className={styles.review}>
        <tr><td rowSpan={3}><BsEmojiLaughing size={70} /></td></tr>
          <tr className={styles.negrita}><h3>Calificaciones</h3>
          <td className={styles.chiquita}>Deja tu puntuacion del servicio : {rating}</td>
          <td className={styles.star}>
             <Star rating={rating} onRating={(rate) => setRating(rate)} />
             <Link to='/home'>
              <Button colorScheme="orange" onClick={rate}>Enviar</Button>
             </Link> 
          </td>
        </tr>
      </table>
  )
}

export default Review;