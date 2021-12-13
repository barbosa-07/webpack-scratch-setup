import nav from "./nav";
import "./footer.css";
import "./button.css";

import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

let botton = makeButton("Yay this is  button");
botton.style = makeColorStyle("red");

document.body.appendChild(botton);

document.body.appendChild(footer);
