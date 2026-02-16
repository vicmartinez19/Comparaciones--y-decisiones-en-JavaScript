let nota = 75;

if (nota > 0 && nota <= 100) {
    console.log("La nota del estudiante es:", nota);

    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Resultado: Bien ");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Resultado: Suficiente");
    } else {
        console.log("Resultado: No aprobado");
    }

} else {
    console.log("Error: La nota debe estar entre 0 y 100.");
}