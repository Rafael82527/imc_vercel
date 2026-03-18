$(document).ready(function () {

    $("#calcular").click(function () {

        // recebendo dados da interface
        let p = parseFloat($("#peso").val());
        let a = parseFloat($("#altura").val());

        // validação
        if (isNaN(p) || isNaN(a) || a === 0) {
            alert("Por favor, insira valores válidos!");
            return;
        }

        // chamando a função calcular
        let dados = calcular(p, a);

        // mostrando na interface
        $("#resultado").html(
            "Considerando seu peso de " + p + "kg e altura de " + a +
            "m, seu IMC é: " + dados.IMC.toFixed(2) +
            " e você " + dados.resultado
        );
    });

});

// função limpar
function limpar() {
    $("#peso").val("");
    $("#altura").val("");
    $("#peso").focus();
    $("#resultado").html("Resultado: ");
}

// função que calcula o IMC
function calcular(p, a) {

    let IMC = p / (a * a);
    let resultado = "";

    if (IMC < 18.5) {
        resultado = "está abaixo do peso";
    } else if (IMC <= 24.9) {
        resultado = "está com o peso normal";
    } else if (IMC <= 29.9) {
        resultado = "está com sobrepeso";
    } else if (IMC <= 39.9) {
        resultado = "está com obesidade";
    } else {
        resultado = "está com obesidade grave";
    }

    return {
        IMC: IMC,
        resultado: resultado
    };
}