import React, { useState,useEffect } from 'react';
import styles from "./ServiceDetail.module.css"
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from '../../components/NavBar/NavBar'
import { getServiceById } from '../../redux/actions';



export const ServiceDetail =()=>{
    const dispatch = useDispatch()
    const details = useSelector(state=>state.details)

 useEffect(()=>{    
    const urlID = (window.location.href)
    let prodID =urlID.split('/')
    // eslint-disable-next-line
    dispatch(getServiceById(prodID[prodID.length -1]));
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
                            </td>
                        </tr>
                    </table>
                </div>
                :"No se encontro el ID"
            }
        </div>
    )
}