const main = document.getElementById("main");
const originalBtn = document.getElementById("original");
const optimalBtn = document.getElementById("optimal");
const pElement = document.getElementsByTagName("p");
const checkBox = document.getElementById("animation-cb").checked;
const avgChar = document.getElementById("avg-char-stat");
const maxWidth = document.getElementById("mw-stat");
const fontSize = document.getElementById("fs-stat");

originalBtn.addEventListener("click", changeToOriginal);
optimalBtn.addEventListener("click", changeToOptimal);

function changeToOriginal() {
  main.style.maxWidth = "81em";
  main.style.fontSize = "14px";
  main.style.lineHeight = "24px";
  document
    .querySelectorAll("p")
    .forEach((e) => (e.style.marginBottom = "10px"));
  originalBtn.classList.remove("unselected");
  originalBtn.classList.add("selected");
  optimalBtn.classList.remove("selected");
  optimalBtn.classList.add("unselected");
  avgChar.innerHTML = "185 characters";
  maxWidth.innerHTML = "1134px / 81em";
  fontSize.innerHTML = "14px";
}

function changeToOptimal() {
  main.style.maxWidth = "35em";
  main.style.fontSize = "16px";
  main.style.lineHeight = "25px";
  originalBtn.classList.remove("selected");
  originalBtn.classList.add("unselected");
  optimalBtn.classList.remove("unselected");
  optimalBtn.classList.add("selected");
  avgChar.innerHTML = "80 characters";
  maxWidth.innerHTML = "560px / 35em";
  fontSize.innerHTML = "16px";
}

function isChecked() {
  if (document.getElementById("animation-cb").checked) {
    main.classList.add("animated");
  } else {
    main.classList.remove("animated");
  }
}
