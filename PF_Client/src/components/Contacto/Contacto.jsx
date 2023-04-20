import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Contacto.module.css'
import { NavBar } from '../NavBar/NavBar';
import { useSelector } from 'react-redux';

export const Contacto = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const form = useRef();
    let products = useSelector((state) => state.products);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qv4sbce', 'template_nui590p', form.current, 'cKf9_oyvXCYms2U4h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Gracias por sus valiosos comentarios, el correo fue enviado con éxito")
    };


    return (
      <div className={!products.length > 0 && styles.hide}>   
        <form ref={form} onSubmit={sendEmail} className={styles.field}>
          <h2>¡Contáctanos!</h2>
          <label>Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="email" name="email" />

          <label>Message</label>
          <textarea name="message" rows="4" cols="30"/>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
}