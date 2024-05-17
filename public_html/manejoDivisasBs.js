/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function convertirDivisasBs() {
    var valor = parseFloat(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 3828.13;
    var euro = 4157.54;
    
    if (document.getElementById("dolar").checked) {
        resultado = valor * dolar;
        if (valor == 1) {
            alert("El cambio de " + valor + " dólar a pesos colombianos es: $" + resultado.toFixed(2));
        }
        else {
            alert("El cambio de " + valor + " dólares a pesos colombianos es: $" + resultado.toFixed(2));
        }
    }
    else if (document.getElementById("euro").checked) {
        resultado = valor * euro;
        if (valor == 1) {
            alert("El cambio de " + valor + " euro a pesos colombianos es: $" + resultado.toFixed(2));
        }
        else {
            alert("El cambio de " + valor + " euros a pesos colombianos es: $" + resultado.toFixed(2));
        }
    }
    else {
        alert("Complete todos los campos");
    }
}
