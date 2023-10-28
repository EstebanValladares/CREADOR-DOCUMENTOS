
const verFormulario = document.querySelector('#formulario');
const botonENvio = document.querySelector('#envioDatos');
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
    }else{
        botonENvio.addEventListener('click',MostrarDatos);
    function MostrarDatos(){
        const nombreDocu = document.getElementById('sectionNombre');
        const apelliDocu = document.getElementById('sectionApellido');
        const correoDocu = document.getElementById('sectionCorreo');
        const telDocu = document.getElementById('sectionTelefono');
        const direcDocu = document.getElementById('sectionDireccion');
        const descDocu = document.getElementById('sectionDescripcion');
        const imagenU = document.getElementById('imagenUsuario');
        let nombres = nombreForm;
        let apellidos = apellidoForm;
        let correos = correoForm;
        let telefonos = telefonoForm;
        let direcciones = direccionForm;
        let descripciones = descripcionForm;
        nombreDocu.textContent = nombres;
        apelliDocu.textContent = apellidos;
        correoDocu.textContent = correos;
        telDocu.textContent = telefonos;
        direcDocu.textContent = direcciones;
        descDocu.textContent = descripciones;
            if (imagenU.files.length > 0) {
                const archivo = imagenU.files[0];
                const imagen = document.createElement("img");
                imagen.src = URL.createObjectURL(archivo);
                imagen.style.borderRadius = '100%';
                const imagenContainer = document.getElementById("container-img");
                imagenContainer.innerHTML = "";
                imagenContainer.appendChild(imagen);
            } else {
                alert("Por favor, seleccione una imagen antes de hacer clic en Mostrar Imagen.");
            }
        }
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
        }, 4000);
    }

}