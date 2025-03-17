/* Propagandas */

/* Animação da propaganda de programação */
function trocar(objeto, imagem) {
    programacao.src = imagem;
}

/* Animação da propaganda de fast food */
function mudar(objeto, imagem) {
    fastfood.src = imagem;
}

/* Animação da propaganda de celular */
function animar(objeto, imagem) {
    celular.src = imagem;
}

/* Animação da propaganda da academia */
function deslocar(objeto, imagem) {
    academia.src = imagem;
}

/* Animação da propaganda de tênis */
function tracejar(objeto, imagem) {
    tenis.src = imagem;
}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Menu retrátil */

/* Está chamando o <div class="hamburger"> */
const hamburguer = document.querySelector(".hamburguer");

/* Está chamando o <ul class="nav-menu"> */
const navMenu = document.querySelector(".nav-menu");

/* Animação das três barras */
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário */

/* Formulário de Múltipla Escolha do Triângulo Retângulo */

/* Está chamando o onload="nome()"*/
function nome() {

    /* Caixinha que aparece para digitar seu nome */
    var nome_variavel = prompt("Digite o seu nome:");

    /* O usuário conseguirá responder o formulário se ele colocar um nome */
    if (nome_variavel) {
        document.getElementById("nome").innerHTML = "Olá! " + nome_variavel + ". Bem-vindo(a) ao formulário de perguntas do nosso site. Estamos felizes em tê-lo(a) aqui e prontos para ajudar. Por favor, preencha as perguntas com cuidado e estaremos à disposição para qualquer dúvida.";
    }

    /* O usuário não conseguirá responder o formulário se o usuário não colocar um nome */
    else {
        alert("Nome não atribuído, tente novamente.");
        nome();
    }

}

/* Está chamando o onclick="resposta()" */
function resposta() {

    /* Questão 1 */
    var resposta_1 = document.querySelector('input[name="questao_1"]:checked');

    /* Questão 2 */
    var resposta_2 = document.querySelector('input[name="questao_2"]:checked');

    /* Questão 3 */
    var resposta_3 = document.querySelector('input[name="questao_3"]:checked');

    /* Questão 4 */
    var resposta_4 = document.querySelector('input[name="questao_4"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_1 && resposta_2 && resposta_3 && resposta_4) {

        /* Se a questão for correta, o usuário acerta */
        if (resposta_1.value == "correta") {
            document.getElementById("resposta_correta_1").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_1").innerHTML = "Errou! A alternativa correta é a letra A). Porque os catetos são os lados que formam o ângulo reto em um triângulo retângulo, não o lado oposto."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_2.value == "correta") {
            document.getElementById("resposta_correta_2").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_2").innerHTML = "Errou! A alternativa correta é a letra D). Porque o cateto é o lado adjacente ao ângulo agudo, enquanto a hipotenusa é o lado oposto ao ângulo reto."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_3.value == "correta") {
            document.getElementById("resposta_correta_3").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_3").innerHTML = "Errou! A alternativa correta é a letra D). Porque a hipotenusa é o lado oposto ao ângulo reto em um triângulo retângulo."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_4.value == "correta") {
            document.getElementById("resposta_correta_4").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_4").innerHTML = "Errou! A alternativa correta é a letra A). Porque o Teorema de Pitágoras afirma que o quadrado da hipotenusa é igual à soma dos quadrados dos catetos em um triângulo retângulo."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Total de pontos: " + contabilizador + "/4";

    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }

}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário de Múltipla Escolha do Teorema de Pitágoras */

/* Está chamando o onclick="respostapitagoras()" */
function respostapitagoras() {

    /* Questão 1 */
    var resposta_5 = document.querySelector('input[name="questao_5"]:checked');

    /* Questão 2 */
    var resposta_6 = document.querySelector('input[name="questao_6"]:checked');

    /* Questão 3 */
    var resposta_7 = document.querySelector('input[name="questao_7"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_5 && resposta_6 && resposta_7) {
        /* Se a questão for correta, o usuário acerta */
        if (resposta_5.value == "correta") {
            document.getElementById("resposta_correta_5").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_5").innerHTML = "Errou! A alternativa correta é a letra C) 10. Resolução: x² = 6² + 8² / x² = 36 + 64 / x² = 100 / x = √100 / x = 10."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_6.value == "correta") {
            document.getElementById("resposta_correta_6").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_6").innerHTML = "Errou! A alternativa correta é a letra D) 3. Resolução: 5² = x² + 4² / 25 = x² + 16² / 25 - 16 = x² / 9 = x² / x = √9 / x = 3."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_7.value == "correta") {
            document.getElementById("resposta_correta_7").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_7").innerHTML = "Errou! A alternativa correta é a letra B) 26. Resolução: 10² + 24² = x² / 100 + 576 = x² / 676 = x² / √676 = x / x = 26."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Total de pontos: " + contabilizador + "/3";

    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }

}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário de Múltipla Escolha das Razões Trigonométricas */

/* Está chamando o onclick="respostatrigonometricas()" */
function respostatrigonometricas() {

    /* Questão 1 */
    var resposta_8 = document.querySelector('input[name="questao_8"]:checked');

    /* Questão 2 */
    var resposta_9 = document.querySelector('input[name="questao_9"]:checked');

    /* Questão 3 */
    var resposta_10 = document.querySelector('input[name="questao_10"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_8 && resposta_9 && resposta_10) {
        /* Se a questão for correta, o usuário acerta */
        if (resposta_8.value == "correta") {
            document.getElementById("resposta_correta_8").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_8").innerHTML = "Errou! A alternativa correta é a letra A). Resolução: seno a = 64/100 e seno b = 36/100."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_9.value == "correta") {
            document.getElementById("resposta_correta_9").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_9").innerHTML = "Errou! A alternativa correta é a letra C). Resolução: cosseno a = 36/100 e cosseno b = 64/100."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_10.value == "correta") {
            document.getElementById("resposta_correta_10").innerHTML = "Acertou! Parabéns!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_10").innerHTML = "Errou! A alternativa correta é a letra B). Resolução: tangente a = 64/36 e tangente b = 36/64."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Total de pontos: " + contabilizador + "/3";

    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }

}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário Discursivo de Triângulo Retângulo */

/* Está chamando o onclick="respostatriangulo()" */
function respostatriangulo() {

    /* Questão 1 */
    var resposta_11 = prompt()

    /* Se todas as questões forem respondidas */
    if (resposta_11) {

        /* Se o usuário responder com um número menor que 90, ele erra */
        if (resposta_11 < 90) {
            alert("Errou! A resposta correta é 90°. Porque todo triângulo retângulo possui um ângulo reto de 90°.")
        }

        /* Se o usuário responder com um número maior que 90, ele erra */
        else if (resposta_11 > 90) {
            alert("Errou! A resposta correta é 90°. Porque todo triângulo retângulo possui um ângulo reto de 90°.")
        }

        /* Resposta correta */
        if (resposta_11 == 90) {
            alert("Acertou! Parabéns!")
        }

    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }

}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário Discursivo do Teorema de Pitágoras */

/* Está chamando o onclick="respostapitagoras2()" */
function respostapitagoras2() {

    /* Questão 1 */
    var pitagoras2 = prompt()

    /* Se todas as questões forem respondidas */
    if (pitagoras2) {

        /* Se o usuário responder com um número menor que 24, ele erra */
        if (pitagoras2 < 24) {
            alert("Errou! A resposta correta é 24. Resolução: x² + 32² = 40² / x² + 1024 = 1600 / x² = 1600 - 1024 / x² = 576 / x² = √576 / x = 24.")
        }

        /* Se o usuário responder com um número maior que 24, ele erra */
        else if (pitagoras2 > 24) {
            alert("Errou! A resposta correta é 24. Resolução: x² + 32² = 40² / x² + 1024 = 1600 / x² = 1600 - 1024 / x² = 576 / x² = √576 / x = 24.")
        }

        /* Resposta correta */
        if (pitagoras2 == 24) {
            alert("Acertou! Parabéns!")
        }

    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }


}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Formulário Discursivo das Razões Trigonométricas */

/* Está chamando o onclick="respostatrigonometricas2()" */
function respostatrigonometricas2() {

    /* Questão 1 */
    var trigonometricas2 = prompt()

    /* Se todas as questões forem respondidas */
    if (trigonometricas2) {

        /* Se o usuário responder com um número menor que 3, ele erra */
        if (trigonometricas2 < 3) {
            alert("Errou! A resposta correta é 3. São eles: o seno, o cosseno e a tangente.")
        }

        /* Se o usuário responder com um número maior que 3, ele erra */
        else if (trigonometricas2 > 3) {
            alert("Errou! A resposta correta é 3. São eles: o seno, o cosseno e a tangente.")
        }

        /* Resposta correta */
        if (trigonometricas2 == 3) {
            alert("Acertou! Parabéns!")
        }
    }

    /* Se usuário não responder todas as questões */
    else {
        alert("Preencha o formulário por completo, por gentileza!")
    }


}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/* Calculadora */

/* Está chamando o <input type="button" class="botao" value="+" onclick="somar()"> */
function somar() {
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value);
}

/* Está chamando o <input type="button" class="botao" value="-" onclick="diminuir()">  */
function diminuir() {
    resultado.value = parseInt(numero1.value) - parseInt(numero2.value);
}

/* Está chamando o <input type="button" class="botao" value="x" onclick="multiplicar()"> */
function multiplicar() {
    resultado.value = parseInt(numero1.value) * parseInt(numero2.value);
}

/* Está chamando o <input type="button" class="botao" value="÷" onclick="dividir()"> */
function dividir() {

    /* Se o usuário colocar para dividir por 0 no "Valor 2", aparecerá um aviso */
    if (numero2.value == 0) {
        alert("Não divida nenhum número por zero!");
    }

    /* Se o usuário não colocar 0, a conta de divisão funcionará normalmente */
    else {
        resultado.value = parseFloat(numero1.value) / parseFloat(numero2.value);
    }
}