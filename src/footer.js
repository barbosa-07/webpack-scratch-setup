import { red, blue } from "./button-styles";

const top = document.createElement("div");
const bottom = document.createElement("div");

top.innerText = "This is top fotter";
bottom.innerText = "This is Bottom fotter";
top.style = red;
bottom.style = blue;

const footer = document.createElement("footer");

footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
