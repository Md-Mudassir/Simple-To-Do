let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList");

myForm.addEventListener("submit", e => {
  e.preventDefault();
  Inserted(myField.value);
});

function Inserted(x) {
  let myValue = `<li>${x}</li><button onclick="remove(this)">Remove</button>`;
  myList.insertAdjacentHTML("beforeend", myValue);
  myField.value = "";
  myField.focus();
}

function remove(removeIt) {
  removeIt.parentElement.remove();
}
