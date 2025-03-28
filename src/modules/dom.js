// Работа с DOM (добавление/удаление карточек)

const createCard = (img, text) => {
  let pattern = document.querySelector(".pattern");
  let clone = pattern.content.cloneNode(true);
  let todoMem = clone.querySelector(".to__do__mem");
  let imgCard = todoMem.querySelector(".img__card");
  let textCard = todoMem.querySelector(".text__card");

  imgCard.src = img;
  textCard.textContent = text;

  document.querySelector("#cards__container").appendChild(todoMem);

  like(todoMem);
  deleteCard(todoMem);
};

const like = (todoMem) => {
  let likeCard = todoMem.querySelector(".like__card");
  likeCard.addEventListener("click", () => {
    likeCard.classList.toggle("like__card");
  });
};

const deleteCard = (todoMem) => {
  let deleteCard = todoMem.querySelector(".delete__card");
  deleteCard.addEventListener("click", () => {
    todoMem.remove();
  });
};

export { createCard };
