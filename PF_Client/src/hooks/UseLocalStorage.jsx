import { useState, useEffect } from 'react'

// key = Es el valor a guardar en localStorage
// initialValue = Por si no hay nada que guardar
export const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue];
}
