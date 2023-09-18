function calcularImc() {
    //IMC = peso / (altura * altura)
    let peso = parseInt(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let imc = Number((peso / (altura * altura)).toFixed(2));

    /* Tabela do IMC:
    
    IMC	Classificação
    Menor que 18,5	Magreza
    18,5 a 24,9	Normal
    25 a 29,9	Sobrepeso
    30 a 34,9	Obesidade grau I
    35 a 39,9	Obesidade grau II
    Maior que 40	Obesidade grau III
    
    */
    //alert(imc)

    if (imc < 18.5) {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br> <span style="color: darkorange; font-size: 120%; ">Classificação: ❗- Magreza.</span>`);
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br>  <span style="color: green; font-size: 120%; ">Classificação: ✅ - Normal.</span>`);
    } else if (imc >= 25 && imc <= 29.99) {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br>  <span style="color: darksalmon; font-size: 120%; ">Classificação: ❗- Sobrepeso.</span>`);
    } else if (imc >= 30 && imc <= 34.99) {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br> <span style="color: darkorange; font-size: 120%; "> Classificação: 🟡 - Obesidade grau I.</span>`);
    } else if (imc >= 35 && imc <= 39.99) {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br> <span style="color: red; font-size: 120%; "> Classificação: 🔴 -  Obesidade grau II.</span>`);
    } else {
        document.getElementById("resultado").innerHTML = (`O IMC é igual a ${imc}.<br> <span style="color: purple; font-size: 120%; "> Classificação: 🟣 - Obesidade grau III.</span>`);
    }

}