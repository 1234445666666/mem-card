//добавление картинки
const inputImg = document.querySelector("#input__img");
const inputText = document.querySelector("#input__text");
const addBtn = document.querySelector("#add__to__do");

addBtn.addEventListener("click", () => {
  if (inputImg.value.trim() !== "" && inputText.value.trim() !== "") {
    createCard(inputImg.value, inputText.value);

    inputImg.value = "";
    inputText.value = "";
  } else {
    alert("Введите задачу");
  }
});

createCard = (img, text) => {
  let pattern = document.querySelector("template");
  let clone = pattern.content.cloneNode(true);
  let todoMem = clone.querySelector(".to__do__mem");
  let imgCard = todoMem.querySelector(".img__card");
  let textCard = todoMem.querySelector(".text__card");

  imgCard.src = img;
  textCard.textContent = text;

  document.querySelector("body").appendChild(clone);
  deleteCard(todoMem);
  like(todoMem);
};

like = (todoMem) => {
  let likeCard = todoMem.querySelector(".like__card");
  likeCard.addEventListener("click", () => {
    likeCard.classList.toggle("liked");
  });
};

deleteCard = (todoMem) => {
  let deleteCard = todoMem.querySelector(".delete__card");
  deleteCard.addEventListener("click", () => {
    todoMem.remove();
  });
};
