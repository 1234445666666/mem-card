import "./styles/style.css";
import { createCard } from "./modules/dom.js";
import { openModal } from "./modules/modal.js";
import { saveChanges } from "./modules/data.js";

//DOM карточки
const formMem = document.querySelector("#formMem");
const inputImg = document.querySelector("#input__img");
const inputText = document.querySelector("#input__text");

formMem.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputImg.value.trim() !== "" && inputText.value.trim() !== "") {
    createCard(inputImg.value, inputText.value);

    inputImg.value = "";
    inputText.value = "";

    formMem.reset();
  } else {
    alert("Введите задачу");
  }
});


//модальное окно
const editBtn = document.querySelector("#edit__to__do");

document.addEventListener("click", (event) => {
  if (event.target.closest("#edit__to__do")) {
    const card = event.target.closest(".to__do__mem");
    openModal(card);
    saveChanges();
    event.preventDefault();
  }
});
