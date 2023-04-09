import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CardUser.module.css'

import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";


export const CardUser = ({id, name,birthdate,address, username ,email,image }) =>{

    const { toggleColorMode, colorMode } = useColorMode();  
    const currentTheme = useColorMode().colorMode

    return(
        <div>
            <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>   
            <div key={id}>
            <Link  to= {`/UserDetail/${id}`}>
            <img className={styles.imgCenter} src={image} alt={name} width='200px' height='200px' />
            </Link>
            <Link>
            <h1 className={styles.textMedium}>{name}</h1>
            <h2 className={styles.textMedium}> {username}</h2>
            <h3 className={styles.textSmall}> {email}</h3>
            <h3 className={styles.textSmall}> {address}</h3>
            <h3 className={styles.textSmall}> {birthdate}</h3>
            </Link>
            </div>
            </li> 
        </div>
    )
}