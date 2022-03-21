const paragraph = document.getElementById("paragraph");

paragraph.style.color = "orange";

document.getElementById("page-title").innerText = "O Conde de monte Cristo";
document.getElementById("second-paragraph").innerText =
  "A volta dos que não foram";
document.getElementById("subtitle").innerText = "I love uuuuuuuu HTML";
// Aqui usei o querySelectorAll para mudar as cores do meu titulo
const paragrafo = document.querySelectorAll(".filmes");
paragrafo[0].style.color = "yellow";
paragrafo[0].style.fontSize = "18px";

const subtitle = document.querySelectorAll(".filmes");
subtitle[1].style.color = "blue";
