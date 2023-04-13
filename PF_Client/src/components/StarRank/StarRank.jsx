import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import styles from "./StarRank.modules.css"

const Review = (props)=>{
  const score = Math.random() * (5 - 1) + 1;

  return(
    <div className='stars'>
      {
        [...new Array(5)].map((star, index)=>{return index < score ? <BsStarFill/> : <BsStar/>})
      }
    </div>
  )
}

export default Review;