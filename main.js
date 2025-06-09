const Especialidades = [ 
    "Cardiologia",
    "Dermatologia",
    "Odontologia",
    "Pediatria",
];

const TurnosDisponibles = {
    "Cardiologia": ["08:00", "09:00", "10:00", "11:00"],
    "Dermatologia": ["08:30", "09:30", "10:30", "11:30"],
    "Odontologia": ["08:15", "09:15", "10:15", "11:15"],
    "Pediatria": ["08:45", "09:45", "10:45", "11:45"],
};

function PedirEspecialidades() {
    let mensaje = "Especialidades disponibles:\n";
    for (let i = 0; i < Especialidades.length; i++) {
        mensaje += `${i + 1}. ${Especialidades[i]}\n`;
    }

    let opcion = parseInt(prompt(mensaje + "Seleccione una especialidad (1-4):"));

    while (isNaN(opcion) || opcion < 1 || opcion > Especialidades.length) {
        opcion = parseInt(prompt("Opción inválida. Por favor, seleccione una especialidad válida (1-4):"));
    }
    return Especialidades[opcion - 1];
}

function PedirTurnos(especialidad) {
    const turnos = TurnosDisponibles[especialidad];
    if (turnos.length === 0) {
        alert("Lo sentimos, no hay más turnos para " + especialidad);
        return null;
    } else {
        return turnos.shift();
    }
}

function ReservarTurno() {
    let nombre = prompt("Ingrese su nombre completo:");

    while (!nombre) {
        nombre = prompt("Debe ingresar un nombre válido. Intente nuevamente:");
    }

    let continuar = true;

    while (continuar) {
        let EspecialidadElegida = PedirEspecialidades();
        let TurnoElegido = PedirTurnos(EspecialidadElegida);

        if (TurnoElegido) {
            alert(`Hola ${nombre}, tenés un turno reservado en ${EspecialidadElegida} a las ${TurnoElegido}.`);
            console.log("Reserva realizada:");
            console.log("Paciente:", nombre);
            console.log("Especialidad:", EspecialidadElegida);
            console.log("Horario:", TurnoElegido);
        }

        let Respuesta = prompt("¿Querés reservar otro turno? (si / no)").toLowerCase();
        while (Respuesta !== "si" && Respuesta !== "no") {
            Respuesta = prompt("Respuesta no válida. Ingrese 'si' o 'no':").toLowerCase();
        }

        continuar = (Respuesta === "si");
    }

    alert("Gracias por usar el sistema de turnos.");
}

ReservarTurno();
