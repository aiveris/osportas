"use strict";
const addTodoA1 = document.querySelector(".add-todo-a1");
const addTodoFormA1 = document.querySelector(".add-todo-a1 .form");
const tableTodosA1 = document.querySelector(".table-a1");
const editModal = document.querySelector(".edit-modal");
const editModalForm = document.querySelector(".edit-modal .form");
const btnAdd = document.querySelector(".btn-add");
const plansA1 = document.querySelector(".buttonA1");
let id;
let countA1 = 0;

// Create element and render to-do a1 ----------------------------------
const renderTodoA1 = (doc) => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().todo}</td>
      <th>
      <button class="btn btn-edit">Edit</button>
      <button class="btn btn-delete">Del</button>
      </th>
    </tr>
  `;
  tableTodosA1.insertAdjacentHTML("beforeend", tr);

  // Click edit to-do
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener("click", () => {
    editModal.classList.add("modal-show");
    id = doc.id;
    editModalForm.todo.value = doc.data().todo;
  });
  // Click delete to-do
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener("click", () => {
    var result = confirm("Want to delete?");
    if (result) {
      db.collection("a1").doc(`${doc.id}`).delete();
    }
  });
};
// // Real time listener.
db.collection("a1").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      renderTodoA1(change.doc);
      countA1++;
      document.getElementById("countA1").innerHTML = countA1;
    }
    if (change.type === "removed") {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableTodosA1.removeChild(tbody);
      countA1--;
      document.getElementById("countA1").innerHTML = countA1;
    }
    if (change.type === "modified") {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableTodosA1.removeChild(tbody);
      renderTodoA1(change.doc);
    }
  });
});
addTodoFormA1.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("a1").add({
    todo: addTodoFormA1.todo.value,
  });
  addTodoFormA1.todo.value = "";
});
// Click submit in edit to-do
editModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("a1").doc(id).update({
    todo: editModalForm.todo.value,
  });
  editModal.classList.remove("modal-show");
});

window.addEventListener("click", (e) => {
  if (e.target === addTodoA1) {
    addModal.classList.remove("modal-show");
  }
  if (e.target === editModal) {
    editModal.classList.remove("modal-show");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" || event.code === 27) {
    editModal.classList.remove("modal-show");
  }
});
function close_modal() {
  editModal.classList.remove("modal-show");
}

function add_player_0() {
  db.collection("a1").add({
    todo: "Tomas Žiburkus 0"
  });
document.getElementById("0").style.background = "#A6CF98";
}
function add_player_1() {
  db.collection("a1").add({
    todo: "Jonas Savickas 1"
  });
  document.getElementById("1").style.background = "#A6CF98";
}
function add_player_3() {
  db.collection("a1").add({
    todo: "Mindaugas Beleka 3"
  });
  document.getElementById("3").style.background = "#A6CF98";
}
function add_player_5() {
  db.collection("a1").add({
    todo: "Dainius Stoškus 5"
  });
  document.getElementById("5").style.background = "#A6CF98";
}
function add_player_7() {
  db.collection("a1").add({
    todo: "Arūnas Stoškus 7"
  });
  document.getElementById("7").style.background = "#A6CF98";
}
function add_player_8() {
  db.collection("a1").add({
    todo: "Laimonas Šegžda 8"
  });
  document.getElementById("8").style.background = "#A6CF98";
}
function add_player_9() {
  db.collection("a1").add({
    todo: "Arminas Zakarys 9"
  });
  document.getElementById("9").style.background = "#A6CF98";
}
function add_player_10() {
  db.collection("a1").add({
    todo: "Artūras Šležas 10"
  });
  document.getElementById("10").style.background = "#A6CF98";
}
function add_player_13() {
  db.collection("a1").add({
    todo: "Vytautas Mereckis 13"
  });
  document.getElementById("13").style.background = "#A6CF98";
}
function add_player_14() {
  db.collection("a1").add({
    todo: "Augustinas Stoškus 14"
  });
  document.getElementById("14").style.background = "#A6CF98";
}
function add_player_15() {
  db.collection("a1").add({
    todo: "Gediminas Petrauskas 15"
  });
  document.getElementById("15").style.background = "#A6CF98";
}
function add_player_17() {
  db.collection("a1").add({
    todo: "Evaldas Žemaitis 17"
  });
  document.getElementById("17").style.background = "#A6CF98";
}
function add_player_33() {
  db.collection("a1").add({
    todo: "Rimantas Sagatas 33"
  });
  document.getElementById("33").style.background = "#A6CF98";
}
function add_player_55() {
  db.collection("a1").add({
    todo: "Justas Sobolevskis 55"
  });
  document.getElementById("55").style.background = "#A6CF98";
}