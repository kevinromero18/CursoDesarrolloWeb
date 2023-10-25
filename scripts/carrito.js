//Funcion para enviar las tarjetas de los productos seleccionados al Html del carrito
function pintarElementosDeCarrito() {
    //Variable que parsea los elementos que hay en el array del localStorage y sobre los que se va a trabajar
    let carritoLocalStorage = JSON.parse(localStorage.getItem("Carrito") || []);
    if (carritoLocalStorage.length > 0) {
        //Asignamos a una varibale el contenedor padre donde se almacenaran las las tarjetas
        let contenedorCarrito = clase("product-carrito")[0];
        contenedorCarrito.innerHTML = "";
        //Recorremos los elementos de los objetos literales que componen el array 
        for (const producto of carritoLocalStorage) {
            //Asiganamos a una variable la estructura html que va a tener cada tarjeta
            let tarjetaProducto = document.createElement("div");
            tarjetaProducto.className = "tarjeta-carrito"
            tarjetaProducto.innerHTML = `
            <img class="imagen-carrito" src="${producto.img}" alt="${producto.nombre}">
            <h5 class="nombre-carrito">${producto.nombre}</h5>
            <h5 class="precio-carrito">${producto.precio}</h5>
            <p class="cuota-carrito">${producto.cuota}</p>
            `;
            contenedorCarrito.appendChild(tarjetaProducto);
        }
    }
}
//Evento para que cargue el dom antes de ejecutar la funcion
document.addEventListener("DOMContentLoaded", () => {
    pintarElementosDeCarrito();
});
