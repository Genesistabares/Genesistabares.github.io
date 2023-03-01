const boton = document.getElementById('boton');
const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const apellido = document.getElementById('apellido');
const direccion = document.getElementById('direccion');
const ciudad = document.getElementById('ciudad');
const fecha = document.getElementById('fecha');
const numero = document.getElementById('numero');
const edad = document.getElementById('edad');


const generarUsuario = async() => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const datos = results[0]

      

        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first;
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        apellido.textContent = datos.name.last;
        direccion.textContent = datos.location.street.name;
        ciudad.textContent = datos.location.city;
        fecha.textContent = datos.dob.date;
        numero.textContent = datos.location.street.number;
        edad.textContent = datos.dob.age;

        console.log(datos)
      
    } catch (error) {
        console.log(error)
    }
}

function mostrar() {
    div = document.getElementById('ampliar')
    div.style.display = '';
}
// function cerrar(){
//     div = document.getElementById('ampliar')
//     div.style.display = 'none';
// }

boton.addEventListener('click', mostrar) 
// boton.addEventListener('click', cerrar)
document.addEventListener('DOMContentLoaded', generarUsuario)