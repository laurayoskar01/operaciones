function calculadora() {

    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var operacion = 0;
    var opcion = 0;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

  
    


do {
    opcion = parseInt(prompt(" ************** calculadora**************\n1.suma\n2.resta\n3.multiplicacion\n4.division\n5.salir "));
    if (opcion < 5) {
        num1 = parseInt(prompt(" digite un numero: "));

        if (opcion == 4) {

            do {

                num2 = parseInt(prompt(" digite otro numero: "));

                if (num2 == 0) {

                    alert(" o es posible hacer division por 0 ");

                }

            } while (num2 == 0);

        } else {

            num2 = parseInt(prompt(" digite otro numero: "));
        }




    } else {
        alert(" opcion invalida ");
    }

    switch (opcion) {

        case 1: //suma
            operacion = num1 + num2;
            break;

        case 2: //resta
            operacion = num1 - num2;
            break;

        case 3: //multiplicacion
            operacion = num1 * num2;
            break;

        case 4: //division

            operacion = num1 / num2;
            break;

        default:
            break;
    }
    if (opcion < 5) {
        alert(" el resultado de esta operacion es: " + operacion);
    }

}
while (opcion < 5 || opcion > 5);
}