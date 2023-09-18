function calcularSalario(){
    let horas = Number(document.getElementById("horas").value)
    let valor = Number(document.getElementById("valor").value)
    let salario = horas * valor;

    document.getElementById("resultado").innerHTML = (`R$ ${salario} 💵`);

}