function multipicacao(num1,num2){
    return Number((num1 + (num2 / 100 * num1)))
}


function calc(num1,num2){
    var salarioInicial = Number(document.getElementById("salarioInicial").value);
    var porcentagem = Number(document.getElementById("porcentagem").value);
    var result = document.getElementById("result").innerHTML = "R$" + multipicacao(salarioInicial,porcentagem)
}




