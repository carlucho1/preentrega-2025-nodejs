import { argv } from "process"

//Primero que nada, voy a desestructurar el array argv. Los dos primeros elementos no me interesan porque son node y el script, así que sólo dejo las comas.

let [, , method, resource] = argv;

// console.log(method, resource)

// Paso todo a minúscula para asegurararme una correcta comparación en las diferentes consignas
method = method.toLowerCase();
resource = resource.toLowerCase()
// Obtengo el id del producto
const id = (resource.split('/'))[1] 

// console.log(resource)
// console.log(id)

// 1° consigna consultar todos los productos de la API. Sintaxis --> npm run start GET products

if (method == 'get' && resource == 'products') {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
        .then((data) => console.log(data));
}
// 2° consigna - Consultar un Producto Específico. Sintaxis --> npm run start GET products/<productId>. Ejemplo: npm run start GET products/15. Utilizamos backtick para formar la cadena correctamente con el id del producto

if (method == "get" && resource == `products/${id}` && id != '') {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
}

// else {
//     console.log("La consulta no cumple con la sintaxis solicitada");
//   }









