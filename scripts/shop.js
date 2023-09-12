let carrito = []; // Array para almacenar los productos
let continuar = true;

function mostrarCarrito() {
  console.log("----- Carrito de Compras -----");
  let total = 0;

  for (let desde = 0; desde < carrito.length; desde++) {
    let producto = carrito[desde];
    console.log(producto.nombre + "  $" + producto.precio);
    total += producto.precio;
  }

  console.log("Total: $" + total);
}

while (continuar) {
  let nombreProducto = prompt("Ingresa el nombre del producto que desea comprar: Zapatilla / Gorra / Pantalon / Remera").toUpperCase();
  let precioProducto = parseInt(prompt("Ingresa el precio del producto que deseas comprar: Z: $4000 / G: $1000 / P: $3000 / R: $2000"));

  carrito.push({ nombre: nombreProducto, precio: precioProducto });

  let respuesta = prompt("¿Quieres agregar otro producto al carrito? (Sí/No)").toLowerCase();

  if (respuesta === "no") {
    continuar = false;
  }
}

mostrarCarrito();
