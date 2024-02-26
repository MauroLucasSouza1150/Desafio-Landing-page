document.querySelector(".btn__send").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".modal__send").showModal()
});

document.querySelector(".btn__closed").addEventListener("click", () => {
    document.querySelector(".modal__send").close()
});