//Array que contiene los productos agregados
let carrito = [];
// Array para almacenar todos los productos de mi sitio
let producto = [];
// Funcion para agregar informacion de cada producto al array
document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
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
  actualizarContador();
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
  pintarElementosDeCarrito();
}

// Funcion para quitar del carrito
function quitarDelCarrito(indiceProducto) {
  // Buscamos el producto en el array carrito
  let productoEnCarrito = carrito.find((producto) => producto.id === indiceProducto);
  if (productoEnCarrito) {
    // Obtener el índice del producto y quitarlo del carrito
    let indiceEnCarrito = carrito.indexOf(productoEnCarrito);
    carrito.splice(indiceEnCarrito, 1);

    localStorage.setItem("Carrito", JSON.stringify(carrito));
    actualizarContador();
    pintarElementosDeCarrito();
  }
}

let contadorCarrito = ids("contador");
//Funcion contadora del carrito
function actualizarContador() {
  if (contadorCarrito) {
    contadorCarrito.textContent = carrito.length;
  }
};