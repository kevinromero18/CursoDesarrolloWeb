// Objeto constructor para los productos
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






