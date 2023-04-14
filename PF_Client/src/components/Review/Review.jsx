import React from "react";
import { BsEmojiLaughing, BsStar, BsStarFill } from "react-icons/bs";
import styles from "../Review/Review.module.css"
import {Button} from '@chakra-ui/react'

const Review = ()=>{
  

  return(    
      <table className={styles.review}>
        <tr><BsEmojiLaughing size={70} /></tr>
        <tr className={styles.negrita}><h3>Calificaciones</h3>
        <td className={styles.chiquita}>Deja tu puntuacion del servicio</td>
        <td className={styles.star}  > 
          {
            [...new Array(5)].map(()=>{return <BsStar size={42}/>})
          }
        </td>
        <td className={styles.centrado} ><Button colorScheme="orange">Enviar</Button></td>
        </tr>
      </table>    
  )
}

export default Review;