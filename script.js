const css = document.querySelector("h3");
const colorPick1 = document.querySelector(".color-pick-1");
const colorPick2 = document.querySelector(".color-pick-2");
const body = document.getElementById("background");

colorPick1.addEventListener("input", changeColor);
colorPick2.addEventListener("input", changeColor);

function changeColor() {
  body.style.background = `linear-gradient(to right, ${colorPick1.value}, ${colorPick2.value})`;
  css.textContent = `${body.style.background};`;
}
