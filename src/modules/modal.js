// Логика модальных окон
import { editCards, saveChanges } from "./data.js";

const modalTemplate = document.querySelector("#modal__template");
const modalContent = modalTemplate.content.cloneNode(true);
const modal = modalContent.querySelector(".modal");
const modalClose = modalContent.querySelector(".modal__close");
const formModal = modalContent.querySelector("#formModal");

export const inputChangeImg = modalContent.querySelector("#change__img");
export const inputChangeText = modalContent.querySelector("#change__text");

let currentCard = null;
const openModal = (card) => {
  document.body.appendChild(modalContent);
  modal.style.display = "flex";
  currentCard = card;
  editCards(card);
};

const closeModal = () => {
  modal.style.display = "none";
  closeOverlay();
};

const editFormModal = () => {
  inputChangeImg.value = "";
  inputChangeText.value = "";

  saveChanges();
};

document.body.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const closeOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
};


modalClose.addEventListener("click", (event) => {
  closeModal();
});

formModal.addEventListener("submit", (event) => {
  event.preventDefault();
  saveChanges();
  closeModal();
});

export { openModal, closeModal, currentCard };
