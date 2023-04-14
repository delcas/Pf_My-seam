import React,{useEffect, useState} from "react";
import imstyle from "./DetImages.module.css";


export default function DetImage({ image }){

  const [mainImage, setMainImage] = useState(image[0])
  useEffect(()=>{
    return()=>{
      setMainImage(image[0])
    }
  },[])

 return (
<div className={imstyle.wrapper}>
  <div className={imstyle.main_screen}>
    <img src={mainImage} alt={mainImage} className={imstyle.main_image}></img>
  </div>
  <div className={imstyle.grid_four_column}>
    {image.map((e,i)=>{
      return(
        <figure className={imstyle.grid_item}>
          <img src={e} 
          alt={e.filename}
          key={i}
          onClick={()=>setMainImage(e)}
          ></img>
        </figure>
      )
    })}
  </div>
</div>


 )
          }