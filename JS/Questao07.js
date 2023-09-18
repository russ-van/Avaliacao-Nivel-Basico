function calcularFatorial() {
    let numero = document.getElementById("numero").value;
    let fatorial = numero;
    let operacao = ""
    
    
    for (let numeroN = numero; numeroN > 0; numeroN--){
    fatorial *=  numeroN
    if(numeroN >=2){
    operacao += (`${numeroN}! x `)
    }else{
      operacao += (`${numeroN}! = `)
    }
    
    }
    fatorial = (fatorial / numero)
    document.querySelector("#resultado").innerHTML = (`Este é o resultado do fatorial de ${numero}: <br> ${operacao} ${fatorial}`);
    
  }
