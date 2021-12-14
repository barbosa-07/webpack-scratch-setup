import nav from "./nav";
import "./footer.css";
import "./button.css";
import imageUrl from "./webpack-logo.jpeg";
import { makeImage } from "./image";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const image = makeImage(imageUrl);

const loadFooter = () => import("./footer");
let botton = makeButton("Yay this is  button");
botton.style = makeColorStyle("red");
botton.addEventListener("click", (e) => {
  loadFooter().then((m) => {
    document.body.appendChild(m.footer);
  });
});

document.body.appendChild(botton);
document.body.appendChild(image);
