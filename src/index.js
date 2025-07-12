import "./styles.css";
import loadHomePage from "./homepage"

const contentDiv = document.querySelector("#content");

const navbar = document.querySelector("nav");

const clearPage = function() {
    while (contentDiv.hasChildNodes()) {
        contentDiv.firstChild.remove();
    }
}

const buttons = navbar.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        clearPage();
    })
}

loadHomePage();