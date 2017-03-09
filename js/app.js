var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    //EN TEORIA, EL SIGUIENTE FOR DEBERÍA IMPRIMIR UNA LISTA DE LOS ESTUDIANTES DEPENDIENDO DEL NUMERO DE ESTUDIANTES REGISTRADOS
    for(var i=0; i<=estudiantes.length; i++){

     var lista= estudiantes[i];
   
    }

    return lista;
}   
function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    //EL SIGUIENTE CICLO GUARDARÁ LOS DATOS DE LOS ESTUDIANTES EN UN ARRAY.
 for (var i=0;i<1;i++){
    //  LAS SIGUIENTES VARIABLES RECOLECTARÁN LOS DATOS CORRESPONDIENTES DE CADA ALUMNO.
    var nombreDeEstudiante = (prompt("Inserta el nombre del (la) estudiante que deseas agregar.")).toLowerCase();
    var porcentajeTecnico = (prompt("Por favor inserta el puntaje técnico correspondiente al estudiante")).toLowerCase();
    var porcentajeHSE = (prompt("¿Cuál es el porcentaje de Habilidades Socio-emocionales del (la) alumno")).toLowerCase();
        //LA SIGUIENTE VARIABLE DECLARARÁ UN OBJETO LITERAL QUE CONTENGA LOS DATOS DE CADA ALUMNO.
    var estudiante = {
            nombre: nombreDeEstudiante,
            porcentajeTecnico: porcentajeTecnico,
            porcentajeHSE: porcentajeHSE
        }; 
        estudiantes.push(estudiante);
    return estudiante;
        //MEDIANTE EL MÉTODO PUSH SE AGREGARÁ EN CADA ITERACIÓN EL OBJETO ESTUDIANTE CON LAS CORRESPONDIENTES PROPIEDADES AL ARREGLO ESTUDIANTES.
    
   }
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
}
function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    
}