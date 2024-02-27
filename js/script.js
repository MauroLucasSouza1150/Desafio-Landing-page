// Pegando os Elementos;
const btnClosed = document.querySelector(".btn__closed");
const msgSucess = document.querySelector(".modal__msg_sucess");
const msgFailed = document.querySelector(".modal__msg_failed");
const modalSend = document.querySelector(".modal__send");
const btnSend = document.querySelector(".btn__send");
const erroName = document.querySelector(".erro__name");
const erroEmail = document.querySelector(".erro__email");
const form = document.querySelector(".form-container");

// Funções;
const pegarDados = () => {
    // Pegar dados do formulário;
    const nome = document.querySelector(".input__name").value;
    const email = document.querySelector(".input__email").value;
    let nomeValido = false;
    let emailValido = false;

    // Validando os dadosdo form;
    if (nome === "" || nome === null || nome.length < 3) {
        erroName.textContent = "O nome é obrigatório, e precisa ter nom mínimo 3 caracteres!";
    } else {
        nomeValido = true;
        erroName.textContent ="";
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/

    if (!emailRegex.test(email)) {
        erroEmail.textContent = "O email também é obrigatório, e precisa ser Válido!";
    } else {
        emailValido = true;
        erroEmail.textContent = "";
    }

    if (nomeValido && emailValido) {
        const cadastro = {
            nome: nome,
            email: email
        }
        form.reset();
        return "sucess"
        
    } else {
        return "failed"
    }
}

const mostrarModal = (status) => {
    // Mudando o Estado do modal
    //const status = "sucess" // msg de erro ou sucesso

    if(status === "sucess") {
        msgFailed.style.display = "none";
        msgSucess.style.display = "block";
    }
    if(status === "failed") {
        msgSucess.style.display = "none";
        msgFailed.style.display = "block";
    }

    modalSend.showModal();
};


// Eventos;
btnSend.addEventListener("click", (e) => {
    e.preventDefault()
    mostrarModal(pegarDados());
});

btnClosed.addEventListener("click", () => {
    modalSend.close()
});