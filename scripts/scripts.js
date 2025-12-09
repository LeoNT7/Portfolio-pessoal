document.getElementById("form-contato").addEventListener("submit", function(e) { // evento que monitora os campos dos formularios a partir do envio
    e.preventDefault(); //previne o comportamento padrão do elemento para o formulario não seja limpo quando o evento ocorrer

    //definição das variaveis
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");
    let status = document.getElementById("status");

    // Limpa o status
    status.textContent = "";
    status.style.color = "white";

    // Validações básicas; verifica se nao há nada digitado no campo para exibir as mensagens para o usuario digitar
    if (nome.value.trim() === "") { 
        status.textContent = "Por favor, preencha o nome.";
        status.style.color = "var(--cor-mensagens-erro)";
        return;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) { // verifica se tem o caracter @ caracteristico de e-mail digitado no formulario
        status.textContent = "Digite um email válido.";
        status.style.color = "var(--cor-mensagens-erro)";
        return;
    }

    if (mensagem.value.trim().length < 10) {
        status.textContent = "A mensagem deve ter pelo menos 10 caracteres."; // verifica se a mensgem foi digitada com menos de 10 caracteres para exibir a mensagem para conter mais caracteres
        status.style.color = "var(--cor-mensagens-erro)";
        return;
    }

    // Simulando envio
    status.textContent = "Enviando..."; // ao passar dos blocos condicionais é simulado o envio
    status.style.color = "var(--cor-titulos)"; //defini a cor das mensagem exibidas

    setTimeout(() => { //define um tempo limite para simular que está sendo enviado
        status.textContent = "Mensagem enviada com sucesso! (Simulação)";
        status.style.color = "var(--cor-mensagens-sucesso)";

        //aqui, é limpo os textos digitados nos campos do formulario
        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }, 1200); //aqui defini o tempo pra simulação
});
