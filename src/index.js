import "./styles.css";
import loadHomePage from "./homepage"
import loadMenu from "./menu"
import loadAbout from "./about"

const contentDiv = document.querySelector("#content");

const navbar = document.querySelector("nav");

const clearPage = function() {
    while (contentDiv.hasChildNodes()) {
        contentDiv.firstChild.remove();
    }
}

const buttons = navbar.querySelectorAll("button");
let currentPage = "Home";

const selectPage = function(targetContent) {
    switch (targetContent.toLowerCase()) {
        case "home":
            loadHomePage();
            break;
        case "menu":
            loadMenu();
            break;
        case "about":
            loadAbout();    
            break;
    }
    currentPage = targetContent;
}

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        if (currentPage != event.target.textContent) {
            clearPage();
            selectPage(event.target.textContent);
        };
    });
}

loadHomePage();