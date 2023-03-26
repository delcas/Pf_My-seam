const regexName = /[^A-Za-z0-9 ]+/g;

export const validate = (form) => {
    let error = {}
    if (!form.name) { error.name = "El nombre es requerido" }
    if (form.name.length < 4) { error.name = "El nombre no puede tener menos de 4 caracteres" }
    if (form.name.length > 20) { error.name = "EL nombre no puede tener mas de 20 caracteres" }
    if (regexName.test(form.name)) { error.name = "El nombre no puede tener caracteres especiales"}
    if (!form.description || form.description === " ") { error.description = "La descripcion del articulo es requerida" }
    if (form.description > 40 ) { error.description = "Ingrese menos de 40 caracteres" }
     if (form.description < 15 ) { error.description = "La descripcion es demaciado corta, ingrese mas de 15 caracteres"}
    if (!form.price || form.price === " ") { error.price = "El precio es requerido" } 
    if (form.price >2000 || form.price < 1)  { error.price = "El precio maximo es de $2000 y el minimo de $1"}
    if (!form.image || form.image === " ") { error.image = "La imagen es requerida" } 
    if (!form.stock || form.stock === '-') { error.stock = "Ingrese el numero de stock"}
     return error;
}