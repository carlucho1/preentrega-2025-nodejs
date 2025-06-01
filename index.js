import { argv } from "process"

//Primero que nada, voy a desestructurar el array argv. Los dos primeros elementos no me interesan porque son node y el script, así que sólo dejo las comas.

let [, , method, resource] = argv;

// console.log(method, resource);

// npm run start GET products

// Paso todo a minúscula para asegurararme una correcta comparación
method = method.toLowerCase();
resource = resource.toLowerCase()

if (method == 'get' && resource == 'products') {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
}



