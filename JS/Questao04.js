function calcularArea(){
// Área = π * (raio * raio)

    let raio = parseFloat(document.getElementById("raio").value)
    let area = (Math.PI * (raio * raio)).toFixed(2)
    let selecao = document.getElementById("medida").value;

    if (selecao == "cm") {
        selecao = "cm²"
    }else{
        selecao = "m²"
    }

    document.getElementById("resultado").innerHTML = (`A área é igual a ${area} ${selecao}. <br> <br>  <img  style="width: 20%;" src="IMG/formula-area-circulo.png" alt="Fórmula"> `)

}