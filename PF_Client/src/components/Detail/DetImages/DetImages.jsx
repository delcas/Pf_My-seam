import React,{useEffect, useState} from "react";
import imstyle from "./DetImages.module.css";

export default function DetImage({ image }) {

  const [mainImage, setMainImage] = useState()

  useEffect(()=>{
      setMainImage(image[0])
  }, [image])

 return (
  <div className={imstyle.wrapper}>
    <div className={imstyle.main}>
      <img src={mainImage} alt={mainImage} className={imstyle.main_image}></img>
    </div>
    <div className={imstyle.grid_four_column}>
      {image.map((e,i)=>{
        return(
          <figure className={imstyle.grid_item}
            onMouseEnter={() => setMainImage(e)}
          >
            <img src={e} 
            alt={e.filename}
            key={i}
            ></img>
          </figure>
        )
      })}
    </div>
  </div>
 )
}