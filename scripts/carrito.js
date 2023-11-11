//Funcion para enviar las tarjetas de los productos seleccionados al Html del carrito
function pintarElementosDeCarrito() {
    //Variable que parsea los elementos que hay en el array del localStorage y sobre los que se va a trabajar
    let carritoLocalStorage = JSON.parse(localStorage.getItem("Carrito") || []);
    if (carritoLocalStorage.length > 0) {
        //Asignamos a una varibale el contenedor padre donde se almacenaran las las tarjetas
        let contenedorCarrito = clase("product-carrito")[0];
        if (contenedorCarrito) {
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
            };
        };
    };
};
//Evento para que cargue el dom antes de ejecutar la funcion
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el botón "Finalizar Compra" después de que la página se haya cargado completamente
    let btnFinalizar = clase("boton-finalizar")[0];
    // Verificar si el botón existe antes de agregar el evento click
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", finalizarCompra);
    };
    pintarElementosDeCarrito();
});

async function finalizarCompra() {
    let carritoLocalStorage = JSON.parse(localStorage.getItem("Carrito") || []);
    try{
        if (carritoLocalStorage.length > 0) {
            await Swal.fire({
                title: "Compra Exitosa!",
                text: "Su compra finalizó exitosamente, Gracias por elegirnos!",
                icon: "success"
            }).then(() => {
                // Lógica para limpiar el carrito después de mostrar el SweetAlert
                carrito = [];
                localStorage.setItem("Carrito", JSON.stringify(carrito));
                actualizarContador();
                pintarElementosDeCarrito()
              });
        } else {
            await Swal.fire({
                title: "Algo salió mal!",
                text: "Error en la compra! Verifica que tengas productos seleccionados!",
                icon: "error"
            });
        };
    } catch (error) {
          console.error('Error al finalizar la compra:', error);
    };
};