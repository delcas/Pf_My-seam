  import React from 'react';
  import { useDispatch } from 'react-redux';
  import styles from './FormCheckout.module.css';
  import { Validation } from './Validation';
  // Chakra
  import { Button } from '@chakra-ui/react'

  export const FormCheckout = ({ input, setInput, err, setErr, cart }) => {
    // Para ejecutar las funciones de las actions
    const dispatch = useDispatch()
      
    // Actualizar el estado del input al escribir y actualizar el estado de error 
    const handleChange = (e) => {
      setInput({...input, [e.target.name] : e.target.value})
      setErr(Validation({...input, [e.target.name]: e.target.value}))
    }

    const handleChangeRecordarDomicilio = (e) => {
      setInput({...input, [e.target.name] : !input.recordar_direccion})
    }
  
    // Deshabilitar botón "Create Pokemon" si hay algún error
    const disabled = Object.keys(err).length || !input.cp
  
    return (
      <div className={styles.containerMain}>
        <div className={styles.containerForm}>
          <form className="row g-3 d-flex">
            <h2 className={styles.titleCreate}>Agrega un domicilio</h2>
  
            {/* Input codigo_postal */}
            <div className="col-md-2">
              <label className="form-label">CP:</label>
              <input 
                type="number" 
                className={err.cp || !input.cp ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.cp} 
                name='cp'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input cp */}
              <div className={err.cp || !input.cp ? "invalid-feedback" : "valid-feedback"}>
                {err.cp || !input.cp ? <span> {err.cp}</span> : '¡Muy bien!'}
              </div>
            </div>
  
            {/* Input ciudad */}
            <div className="col-md-10">
              <label className="form-label">Ciudad:</label>
              <input 
                className={err.ciudad || !input.ciudad ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.ciudad} 
                name='ciudad'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input ciudad */}
              <div className={err.ciudad || !input.ciudad ? "invalid-feedback" : "valid-feedback"}>
                {err.ciudad || !input.ciudad ? <span> {err.ciudad}</span> : '¡Muy bien!'}
              </div>
            </div>

             {/* Input colonia */}
            <div className="col-md-4">
              <label className="form-label">Colonia:</label>
              <input 
                className={err.colonia || !input.colonia ? "form-control is-invalid" : "form-control is-valid"}  
                value={input.colonia} 
                name='colonia'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input colonia */}
              <div className={err.colonia || !input.colonia ? "invalid-feedback" : "valid-feedback"}>
                {err.colonia || !input.colonia ? <span> {err.colonia}</span> : '¡Muy bien!'}
              </div>
            </div>
  
            {/* Input calle */}
            <div className="col-md-6">
              <label className="form-label">Calle:</label>
              <input 
                className={err.calle || !input.calle ? "form-control is-invalid" : "form-control is-valid"}  
                value={input.calle}
                name='calle'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input calle */}
              <div className={err.calle || !input.calle ? "invalid-feedback" : "valid-feedback"}>
                {err.calle || !input.calle ? <span> {err.calle}</span> : '¡Muy bien!'}
              </div>
            </div>
  
            {/* Input numero_exterior */}
            <div className="col-md-2">
              <label className="form-label">Núm ext:</label>
              <input 
                type='number'
                className={err.numero_exterior || !input.numero_exterior ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.numero_exterior}
                name='numero_exterior'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input numero_exterior */}
              <div className={err.numero_exterior || !input.numero_exterior ? "invalid-feedback" : "valid-feedback"}>
                {err.numero_exterior || !input.numero_exterior ? <span> {err.numero_exterior}</span> : '¡Muy bien!'}
              </div>
            </div>
  
            {/* Input entre_calles */}
            <div className="col-md-8">
              <label className="form-label">Entre calles:</label>
              <input 
                className={err.entre_calles || !input.entre_calles ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.entre_calles}
                name='entre_calles'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input entre_calles */}
              <div className={err.entre_calles || !input.entre_calles ? "invalid-feedback" : "valid-feedback"}>
                {err.entre_calles || !input.entre_calles ? <span> {err.entre_calles}</span> : '¡Muy bien!'}
              </div>
            </div>

            {/* Input telefono */}
            <div className="col-md-4">
              <label className="form-label">Teléfono:</label>
              <input 
                type='number'
                className={err.telefono || !input.telefono ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.telefono} 
                name='telefono'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input telefono */}
              <div className={err.telefono || !input.telefono ? "invalid-feedback" : "valid-feedback"}>
                {err.telefono || !input.telefono ? <span> {err.telefono}</span> : '¡Muy bien!'}
              </div>
            </div>
  
            {/* Input referencia_direccion */}
            <div className="col-md-12">
              <label className="form-label">Indicaciones adicionales de esta dirección:</label>
              <input 
                className={err.referencia_direccion || !input.referencia_direccion ? "form-control is-invalid" : "form-control is-valid"} 
                value={input.referencia_direccion} 
                name='referencia_direccion'
                placeholder='Descripción de la fachada, punto de referencia, indicación de seguridad, etc.'
                onChange={(e) => handleChange(e)}
              />
              {/* Validación input referencia_direccion */}
              <div className={err.referencia_direccion || !input.referencia_direccion ? "invalid-feedback" : "valid-feedback"}>
                {err.referencia_direccion || !input.referencia_direccion ? <span> {err.referencia_direccion}</span> : 'Looks good!'}
              </div>
            </div>

            {/* Recordar domicilio */}
            <div className="col-12">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name='recordar_direccion'
                  onChange={(e) => handleChangeRecordarDomicilio(e)}
                   />
                <label className="form-check-label">
                  ¿Recordar domicilio?
                </label>
              </div>
            </div>
          </form>
        </div>
          <div className={styles.containerResume}>
            <h2 className={styles.titleCreate}>Resumen de compra</h2>
            -----------------------------------------------------
            {cart.map(el => <h4 key={el.id}>{el.quantity} {el.name} <b>${el.price}</b></h4>)}
            -----------------------------------------------------
            <h3>Total: <b>${Math.round(cart.reduce((accumulator, currentValue) => 
              accumulator + (currentValue.price * currentValue.quantity), 0))}</b></h3>
          </div>
          {/* <div className={styles.conatinerButtton}>
            <Button className={styles.buttonContinue} title='Completa todos los campos' isDisabled={disabled} size='lg' >Continuar</Button>
          </div> */}
      </div>
    )
  }
  