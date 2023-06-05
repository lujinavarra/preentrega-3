//declaramos  una clase para crear los objetos con la nomina de profesionales
class Profesional {
    constructor(nombre, servicio, honorarios){
    this.nombre = nombre;
    this.servicio = servicio;
    this.honorarios = honorarios;
    }
}

//genero los profesionales instanciando la class
const profesional1 = new Profesional("Dra Carina Guzman", "Pediatría", 2000);
const profesional2 = new Profesional("Dra Tatiana Rodrigo", "Neurocirugía", 3000);
const profesional3 = new Profesional("Dra Carolina Balduzzi", "Gastroenterología", 2000);
const profesional4 = new Profesional("Dr Hugo Morero", "Cirugía", 3000);
const profesional5 = new Profesional("Dr Florencio Sanchez", "Traumatología", 2500);


//establecemos un array con todos los profesionales que hay
const staff = [profesional1, profesional2, profesional3, profesional4, profesional5];

//cargo los profesionales al storage
localStorage.setItem("staff", JSON.stringify(staff));

//traigo el botón del html. Agrego un evento para traer los profesionales desde el storage y mostrarlos en el html
let profesionales = document.getElementById("profesionales");
profesionales.addEventListener("click", () => {
    let staffStorage = localStorage.getItem("staff");
    let staff = JSON.parse(staffStorage);
    staff.forEach((profesional) => {
        let div = document.createElement("div");
        div.className = "cards";
        div.innerHTML = `
        <h2>Especialidad: ${profesional.servicio}</h2>
        <p>Nombre: ${profesional.nombre}</p>
        <p>$${profesional.honorarios}</p>
        `;
    document.body.append(div);
    });
    document.getElementById("sacarTurno").disabled = false;
});




