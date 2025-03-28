// Управление данными (массив карточек)
import { inputChangeImg, inputChangeText, currentCard } from "./modal.js";

const editCards = (card) => {
  const imgElement = card.querySelector(".img__card");
  const textElement = card.querySelector(".text__card");

  inputChangeImg.value = imgElement.src;
  inputChangeText.value = textElement.textContent;
};

const saveChanges = () => {
  if (currentCard === null) {
    return; 
  }
  else {
    const imgElement = currentCard.querySelector(".img__card");
    const textElement = currentCard.querySelector(".text__card");

    imgElement.src = inputChangeImg.value;
    textElement.textContent = inputChangeText.value;
  }
};

export { editCards, saveChanges };
