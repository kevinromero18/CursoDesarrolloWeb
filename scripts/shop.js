/* // Objeto constructor para los productos
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Definición de los productos y sus precios 
const preciosProductos = {
  Pantalon: 3000,
  Remera: 2000,
  Gorra: 1000,
  Zapatilla: 5000,
};

// Instanciamiento de Producto para cada producto
const pantalon = new Producto("Pantalón", preciosProductos.Pantalon);
const remera = new Producto("Remera", preciosProductos.Remera);
const gorra = new Producto("Gorra", preciosProductos.Gorra);
const zapatilla = new Producto("Zapatilla", preciosProductos.Zapatilla);

// Objeto contenedor de productos
const productos = {
  Pantalon: pantalon,
  Remera: remera,
  Gorra: gorra,
  Zapatilla: zapatilla,
};

// Función para mostrar el menú de productos y obtener la selección del usuario
function mostrarMenuProductos() {
  let opciones = "Productos disponibles:\n";
  for (const producto in productos) {
    opciones += `${producto}: $${productos[producto].precio}\n`;
  }

  const seleccion = prompt(opciones + "\nIngrese el nombre del producto que desea comprar:");

  if (seleccion && seleccion in productos) {
    return seleccion;
  } else {
    alert("Producto no válido. Por favor, seleccione un producto válido.");
    return mostrarMenuProductos();
  }
}

// Función principal
function main() {
  let totalPagar = 0;

  do {
    const productoSeleccionado = mostrarMenuProductos();
    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado} que desea comprar:`));

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad no válida. Por favor, ingrese una cantidad válida.");
      continue; // Vuelve al inicio del bucle si la cantidad no es válida
    }

    totalPagar += productos[productoSeleccionado].precio * cantidad;

    const agregarOtro = prompt("¿Deseas agregar otro producto a tu compra? (si/no)").toLowerCase();
    if (agregarOtro !== "si") {
      break; // Sale del bucle si la respuesta no es 'si'
    }

  } while (true); // Bucle infinito, se rompe con el "break" cuando el usuario no desea agregar más productos

  alert(`El total a pagar por tu compra es: $${totalPagar}`);
}

// Llamado de la función principal
main();



 */

//Array que contiene los productos agregados
let carrito = [];
// Array para almacenar todos los productos de mi sitio
let producto = [];

// Funcion para agregar informacion de cada producto al array
document.addEventListener("DOMContentLoaded", () => {
  let elementosProducto = qsa(".product");

  //Recorremos la informacion de las tarjetas del html seleccionando solo lo que deseo agregar al array
  elementosProducto.forEach((e, i) => {
      let img = e.querySelector(".imagen");
      let nombre = e.querySelector(".nombre").textContent;
      let precio = e.querySelector(".precio").textContent;
      let cuota = e.querySelector(".cuota").textContent;


      //Al crear estos objetos en un array, cada vez que cree una nueva tarjeta en mi html, se almacenara la informacion automaticamente en producto=[]
      producto.push({id: i, img: img.src, nombre: nombre, precio: precio, cuota: cuota});

      //Variable para distinguir cada tarjeta con el numero de indice del array producto, 
      let botonAgregar = e.querySelector(".btn-agregar");
      let botonQuitar = e.querySelector(".btn-quitar");
      //Conectamos los botones agregar y quitar con los indices de los productos, haciendo que cada boton sea unico, sin necesidad de utilizar muchos id en mi html
      botonAgregar.setAttribute("data-indice", i);
      botonQuitar.setAttribute("data-indice", i);
      //Agregar la informacion del array producto al array carrito, cuando damos click en el boton agregar
      botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(i);
      });
      //De la misma manera, quitamos la informacion del array carrito, cuando damos click en el boton quitar
      botonQuitar.addEventListener("click", () => {
        quitarDelCarrito(i);
      })
    }
  );
  console.log(producto);
});
// Funcion para agregar esa informacion al carrito
function agregarAlCarrito(indiceProducto) {
  let productoSeleccionado = producto[indiceProducto];
  //Agregamos el producto al array mediante el metodo push
  carrito.push(productoSeleccionado);
  //Al mismo tiempo almacenar el array carrito en el localStorage
  localStorage.setItem("Carrito", JSON.stringify(carrito));
  //Funcion contadora del carrito
  actualizarContador();
  console.log(carrito);
}

// Funcion para quitar del carrito
function quitarDelCarrito(indiceProducto) {
  // Verificamos si el indice es valido
  if (indiceProducto >= 0 && indiceProducto < carrito.length) {
    // Quitamos el producto del carrito con el metodo splice
    carrito.splice(indiceProducto, 1);
    // De la misma manera actualizamos el localStorage
    localStorage.setItem("Carrito", JSON.stringify(carrito));

    //Funcion contadora del carrito
    actualizarContador();
    console.log(carrito);
  }
}


let contadorCarrito;
//Funcion contadora del carrito
function actualizarContador() {
    contadorCarrito.textContent = carrito.length;
};
//Evento para acatualizar el DOM antes de ejecutar la funcion
document.addEventListener("DOMContentLoaded", () => {
  contadorCarrito = ids("contador");
  actualizarContador();
});
// Funcion global para acceder a todas las clases
function clase(clase) {
  return document.getElementsByClassName(clase);    
}
// Funcion global para acceder a todos los id
function ids(id) {
  return document.getElementById(id);    
}
// Funcion global para cualquier selector
function qsa(selector) {
  return document.querySelectorAll(selector);
}