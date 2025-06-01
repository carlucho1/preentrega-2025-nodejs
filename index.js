import { argv } from "process"

//Primero que nada, voy a desestructurar el array argv. Los dos primeros elementos no me interesan porque son node y el script, así que sólo dejo las comas.

let [, , method, resource, title, price, category] = argv;

console.log(method, resource, title, price, category)

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

// 3° consigna - Creación de un nuevo producto. Sintaxis --> npm run start POST products <title> <price> <categoria>. Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras

if (method == "post" && resource == 'products') {
    // Creo un objeto del tipo product con las llaves indicadas: title, price y category
    const product = { title: title, price: parseInt(price), category: category};
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
}





// else {
//     console.log("La consulta no cumple con la sintaxis solicitada");
//   }









