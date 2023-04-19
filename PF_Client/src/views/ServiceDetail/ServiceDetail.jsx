import React, { useState,useEffect } from 'react';
import styles from "./ServiceDetail.module.css"
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from '../../components/NavBar/NavBar'
import { getServiceById } from '../../redux/actions';
import Review from '../../components/Review/Review';
import Questions from '../../components/Questions/Questions';

//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

export const ServiceDetail =({ isAuthenticated, user })=>{
    const dispatch = useDispatch()
    const details = useSelector(state=>state.details)
    const cart = useSelector(state => state.cart);
    const userInfo = useSelector((state) => state.userInfo);
    const userId = userInfo.id;

    let ver;
  console.log('Usuario actual: ',userId, '. Oferente del servicio: ', details.userid);
  userId === details.userid ? (ver = true) : (ver = false);

      // Muestra alerta/notificación del producto añadido al carrito de compras
      const [notify, setNotify] = useState(false);

    
    const showNotify = () => {
        setNotify(!notify);
      };
    
    const handleCart =  () => {
        // Validar si ya existe el producto en el carrito de compras
        if (cart.find(el => el === details)) {   
            details.quantity +=  1 
        } else {
            details.quantity = 1 
            cart.push(details)
          }
          showNotify()
      }

 useEffect(()=>{    
    const urlID = (window.location.href)
    let prodID =urlID.split('/')
    // eslint-disable-next-line
    dispatch(getServiceById(prodID[prodID.length -1]));
    dispatch(getUserByEmail(user?.email));
  },[dispatch])  

    return(
        <div>
            <NavBar/>
       
            {
                details.length !== 0 ?
                <div>
                    <h1> Detalle del servicio</h1>
                    <table className={styles.detailTable}>
                     <tr>
                        <td>
                        <img className={styles.FlagImg} src={details.image} alt={`imagen del servicio ${details.name}`}></img>
                        </td>
                        <td className={styles.tdLeft}>
                            <tr>Servicio: {details.name}</tr>
                            <tr>Descripcion: {details.description}</tr>
                            <tr>Precio: {details.price} </tr>
                            <tr>Numero: {details.number}</tr>
                            <tr>Email: {details.email}</tr>
                            <tr>Pais: {details.country} </tr>
                            <tr>Ciudad: {details.city} </tr>
                            <tr><Review/></tr>
                        </td>
                     </tr>                        
                    </table>
                </div>
                :"No se encontro el ID"
            }
            <div>
            <Questions
            sell='service'
          userId={userId}
          details={details}
          ver={ver}
          />
            <button  w={8} h={8} className={styles.buttonCart} onClick={handleCart} title="Agregar al carrito"> Agregar al carrito </button>
            </div>
        </div>
       
    )
}