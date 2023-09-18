function verificarIdade() {
    let idade = Number(document.getElementById("idade").value)

    if (idade < 12) {
        document.getElementById("resultado").innerHTML = (`<h3 style="color: darkgreen; font-size: 40px;margin: 3vh;">Criança. 🍭</h3>  `);
    } else if(idade < 18){
        document.getElementById("resultado").innerHTML = (` <h3 style="color: darkgreen; font-size: 40px;margin: 3vh;">Adolescente. 🚲</h3> `);
    }else if(idade < 60){
        document.getElementById("resultado").innerHTML = (`<h3 style="color: darkgreen; font-size: 40px;margin: 3vh;">Adulto. 😎</h3>  `);
    }else{
        document.getElementById("resultado").innerHTML = (`<h3 style="color: darkgreen; font-size: 40px;margin: 3vh;">Idoso. 🦉</h3>  `);
    }

}