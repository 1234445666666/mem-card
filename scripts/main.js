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

const createCard = (img, text) => {
  let todoMem = document.createElement("div");
  todoMem.className = "to__do__mem";
  todoMem.insertAdjacentHTML(
    "beforeend",
    `
        <span class="icon like__card"></span>
        <img class="img__card" src="${img}"></img>
        <span class="text__card">${text}</span>
        <span class="icon delete__card"></span>
    `
  );

  document.body.appendChild(todoMem);

  let likeCard = todoMem.querySelector(".like__card");
  let deleteCard = todoMem.querySelector(".delete__card");

  likeCard.addEventListener("click", () => {
    likeCard.classList.toggle("liked");
  });

  deleteCard.addEventListener("click", () => {
    todoMem.remove();
  });
};
