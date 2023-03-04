import _ from "lodash"
import './style.css';
import icon from "./images/green-tick.png"

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello")

    const image = new Image(50, 50);
    image.src = icon;

    element.appendChild(image);

    return element;
  }
  
  document.body.appendChild(component());