function seleccionarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = 0;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No es posible dividir por 0.");
            }
            break;
        default:
            alert("Operación no válida");
            break;
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
