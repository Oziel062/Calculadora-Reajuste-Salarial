function inserir(valor){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + valor

}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
    else{

        document.getElementById("resultado").innerHTML = "Erro!!"
    }
}

function limpar(){
    document.getElementById("resultado").innerHTML = ""
}

function apagar(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0,resultado.length -1)
}
////////////////////////////////////////////////////


function multipicacao(num1,num2){
    return Number((num1 + (num2 / 100 * num1)))
}


function calc(num1,num2){
    var salarioInicial = Number(document.getElementById("salarioInicial").value);
    var porcentagem = Number(document.getElementById("porcentagem").value);
    var result = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = multipicacao(salarioInicial,porcentagem)
    
}




