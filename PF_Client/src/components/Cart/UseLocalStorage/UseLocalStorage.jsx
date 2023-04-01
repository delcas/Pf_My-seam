import { useState } from 'react'
// key = "name"
// initialValue = objeto/string a guardar
export const UseLocalStorage = (key, initialValue) => {

  // Guardar initialValue en Local storage formato "String"
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
      }
  })

  // Mostrar Local storage formato "Json/Objeto"
  const setValue = initialValue => {
    try {
      setStoredValue(initialValue)
      window.localStorage.setItem(key, JSON.stringify(initialValue))
    } catch (error) {
        console.log(error);
      }
  }

  return [storedValue, setValue]
}
