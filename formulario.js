//traigo elementos del html y declaro variables necesarias para poder trabajar

let contenedorProfesionales = document.getElementById("contenedorProfesionales");
let formulario = document.getElementById("formulario");
let enviar;
let nombrePaciente;
let dni;
let telefono;
let staffProfesionales;
let informacionTurno = document.getElementById("mostrarInformacionTurno");

//inserto los datos de los profesionales en el formulario

function modificarFormulario() {
    staffProfesionales = document.getElementById("staffProfesionales");
    for (let i = 0; i < staff.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = staff[i].nombre;
        staffProfesionales.appendChild(option);
    }
}
modificarFormulario();

//declaro un objeto para carga de los pacientes
class Paciente {
    constructor(nombrePaciente, dni, telefono) {
        this.nombrePaciente = nombrePaciente;
        this.dni = dni;
        this.telefono = telefono;
    }
}


//genero el evento del formulario para que el usuario cargue sus datos
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    nombrePaciente = document.getElementById("nombrePaciente").value;
    dni = document.getElementById("dni").value;
    telefono = document.getElementById("telefono").value;
    let reglaNombrePaciente = isNaN(nombrePaciente);
    let reglaDni = Number(dni) > 0;
    let reglaTelefono = Number(telefono) > 0;
    if (reglaNombrePaciente === true && reglaDni === true && reglaTelefono === true) {
        const paciente1 = new Paciente(nombrePaciente, dni, telefono);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${paciente1.nombrePaciente}, nos pondremos en contacto con usted al numero ${paciente1.telefono} para definir fecha y horario del turno. Muchas gracias por su elección`,
            showConfirmButton: false,
            timer: 2500
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sus datos no fueron cargados correctamente, por favor realice nuevamente su selección'
        })
    }
    formulario.reset();
})
