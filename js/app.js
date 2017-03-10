function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    
    return estudiantes;
}   
function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    //  LAS SIGUIENTES VARIABLES RECOLECTARÁN LOS DATOS CORRESPONDIENTES DE CADA ALUMNO.
    var nombreDeEstudiante = (prompt("Inserta el nombre del (la) estudiante que deseas agregar.")).toLowerCase();
    var porcentajeTecnico = prompt("Por favor inserta el puntaje técnico correspondiente al estudiante");
    var porcentajeHSE = prompt("¿Cuál es el porcentaje de Habilidades Socio-emocionales del (la) alumno");
        //LA SIGUIENTE VARIABLE DECLARARÁ UN OBJETO LITERAL QUE CONTENGA LOS DATOS DE CADA ALUMNO.
    var estudiante = {
            "nombreDeEstudiante": nombreDeEstudiante,
            "porcentajeTecnico": porcentajeTecnico,
            "porcentajeHSE": porcentajeHSE
        }; 
        estudiantes.push(estudiante);
    return estudiante;
        //MEDIANTE EL MÉTODO PUSH SE AGREGARÁ EN CADA ITERACIÓN EL OBJETO ESTUDIANTE CON LAS CORRESPONDIENTES PROPIEDADES AL ARREGLO ESTUDIANTES.
    
   
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreDeEstudiante + "</p>";
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
  /*  var resultado = "";
    for( var i = 0 ; i<estudiantes.length;i++){
        resultado += mostrar(estudiantes[i]);        


    }  return resultado;

*/
    var resultado = "";
    estudiantes.forEach(function (alumno){
        resultado += mostrar(alumno);
    });
    return resultado;
}
function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var algoDePrueba = estudiantes.filter(function(alumno){
        return alumno.nombre.toLowerCase() == nombre.toLowerCase();
    });
    return algoDePrueba; 
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenPorTopTecnico = estudiantes.sort(function(a, b){
        return b.porcentajeTecnico - a.porcentajeTecnico;
        });
                        
    return ordenPorTopTecnico;
}
function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
        var ordenPorHSE =  estudiantes.sort(function(a, b){
        return b.porcentajeHSE - a.porcentajeHSE;
        });
                        
    return ordenPorHSE;
}
