import nav from "./nav";
import "./footer.css";
import "./button.css";
import imageUrl from "./webpack-logo.jpeg";
import { makeImage } from "./image";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const image = makeImage(imageUrl);

let botton = makeButton("Yay this is  button");
botton.style = makeColorStyle("red");

document.body.appendChild(botton);
document.body.appendChild(image);
document.body.appendChild(footer);
