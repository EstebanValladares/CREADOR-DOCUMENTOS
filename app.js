
const verFormulario = document.querySelector('#formulario');
verFormulario.addEventListener('submit',verificador);

function verificador(e){
    e.preventDefault();
    const nombreForm = document.querySelector('#nombre').value;
    const apellidoForm = document.querySelector('#apellido').value;
    const correoForm = document.querySelector('#correo').value;
    const telefonoForm = document.querySelector('#telefono').value;
    const direccionForm = document.querySelector('#direccion').value;
    const descripcionForm = document.querySelector('#descripcion').value;

    if(nombreForm=='' || apellidoForm=='' || correoForm=='' || telefonoForm=='' || direccionForm=='' || descripcionForm==''){
        alertaMensaje('RELLENAR TODOS LOS ESPACIOS!');
    }
}
function alertaMensaje(mensaje){
    const contenedorAlert = document.querySelector('#container-error');
    const creacionMensaje = document.querySelector('.alertas');
    if(!creacionMensaje){
        const alert = document.createElement('p');
        alert.classList.add('alertas');
        alert.innerHTML = `
        <span class="block">${mensaje}</span>
        `
        contenedorAlert.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

}