/* 
const obtenerFechaNacimiento = () => prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

const mostrarMensaje = (mensaje) => alert(mensaje);

const verificarEdad = (obtenerFechaNacimiento, mostrarMensaje) => {
  const fechaNacimiento = obtenerFechaNacimiento();
  const anioActual = new Date().getFullYear();


  const fechaNacimientoValida = /^(\d{4})-(\d{2})-(\d{2})$/.test(fechaNacimiento);

  if (!fechaNacimientoValida) {
    mostrarMensaje("Formato de fecha de nacimiento no válido. Por favor, ingrese la fecha en el formato correcto.");
    return;
  }

  const anioNacimiento = parseInt(fechaNacimiento.split('-')[0]);
  const edad = anioActual - anioNacimiento;

  if (isNaN(edad)) {
    mostrarMensaje("Error al calcular la edad. Por favor, inténtelo de nuevo.");
    return;
  }

  if (edad >= 18) {
    mostrarMensaje("¡Bienvenido! Usted es mayor de edad y puede ingresar al sitio.");
  } else {
    mostrarMensaje(`Lo siento, usted tiene ${edad} años y es menor de edad. No puede ingresar al sitio.`);
  }
};


verificarEdad(obtenerFechaNacimiento, mostrarMensaje);





let nombreUsuario = false;
let regex = /^[A-Za-z\s]+$/;

function validarUsuario(){
    while (!nombreUsuario) {
        let usuario = prompt("Ingrese su Nombre de Usuario Válido para continuar (Nombre y Apellido)");
        if (regex.test(usuario)) {
            nombreUsuario = true;
            alert("¡Nombre de Usuario " + usuario + " Correcto!");
            alert("¡Hola! " + usuario);
            alert("Ingrese a la pestaña de Shop para Comenzar.")
        }else {
            alert("Tu nombre de Usuario es Incorrecto");
        }
    }  
}

validarUsuario(); */

 