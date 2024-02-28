// Pegando os Elementos;
const btnClosed = document.querySelector(".btn__closed");
const msgSucess = document.querySelector(".modal__msg_sucess");
const msgFailed = document.querySelector(".modal__msg_failed");
const modalSend = document.querySelector(".modal__send");
const btnSend = document.querySelector(".btn__send");
const erroName = document.querySelector(".erro__name");
const erroEmail = document.querySelector(".erro__email");
const form = document.querySelector(".form-container");
const inputName = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");


// Funções;
const validarDados = ({ name, email }) => {
    // Validando os dados do form;
    const nomeValido = name && name.length >= 3
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
    const emailValido = email && emailRegex.test(email)

    return {
        nomeValido,
        emailValido
    }
}

const pegarDados = () => {
    // Pegar dados do formulário;
    const data = {
        name: inputName.value,
        email: inputEmail.value
    }

    const { nomeValido, emailValido } = validarDados(data);
    erroName.style.display = !nomeValido ? "block" : "none";
    erroName.textContent = !nomeValido ? "Por favor, insira um nome válido (mínimo de 3 caracteres)." : "";
    erroEmail.style.display = !emailValido ? "block" : "none";
    erroEmail.textContent = !emailValido ? "Por favor, insira um e-mail válido." : "";

    if (nomeValido && emailValido) {
        form.reset()
        return "sucess"
    } else {
        return "failed";
    }

}

const formatarModal = (status) => {
    msgSucess.style.display = (status === "sucess") ? "block" : "none"
    msgFailed.style.display = (status === "failed") ? "block" : "none"
}

const mostrarModal = (status) => {
    // Mudando o Estado do modal
    formatarModal(status)
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