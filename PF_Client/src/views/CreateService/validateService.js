const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export const validate = (form) => {
    let error = {}
    if (!form.name) { error.name = "El servicio es requerido" }
    if (!form.price || form.price === " ") { error.price = "El precio es requerido" } 
    if (!form.description || form.description === " ") { error.description = "La descripcion del servicio es requerida" }
    if (form.description.length < 15 ) { error.description = "La descripcion es demaciado corta, ingrese mas de 15 caracteres"}
    if (form.description.length > 60 ) { error.description = "Ingrese menos de 60 caracteres" }
    if (!form.number || form.number === " ") { error.number = "Ingrese su numero de telefono" }
    if(!phoneRegex.test(form.number)) { error.number = "Ingrese un numero de telefono valido"}
    if (!form.email || form.email === " ") { error.email = "Ingrese un correo electronico" }
    if (!emailRegex.test(form.email)) { error.email = "Ingrese un correo electronico valido" }
    if (!form.country || form.country === " ") { error.country = "Ingrese su pais de residencia" }
    if (!form.city || form.city === " ") { error.city = "Ingrese su ciudad de residencia"}
     return error;
}