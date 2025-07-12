const contentDiv = document.querySelector("#content");

import {createElement} from "./createElement";

const createDivider = function(appendTo, type) {
    let divider = createElement(
        "div", appendTo, {elementIdentifier: type}
    );
}

const createBanner = function() {
    let banner = createElement(
        "div", contentDiv, {elementIdentifier: "banner"}
    );

    createDivider(banner, "banner-divider");

    let restarauntName = createElement(
        "h1", banner, {elementTextContent: "Patsy's Italian Restaurant"}
    );

    let restarauntSubtext = createElement(
        "h2", banner, {elementTextContent: "A New York landmark made famous by Frank Sinatra"}
    );

    createDivider(banner, "banner-divider");

    let menuButton = createElement(
        "button", banner, {elementTextContent: "VIEW ALL DAY MENU"}
    );
}

const createInfoContainer = function() {
    let infoContainer = createElement(
        "div", contentDiv, {elementIdentifier: "info-container"}
    );

    createDivider(infoContainer, "info-divider");

    let infoHeader = createElement (
        "h2", infoContainer, {elementTextContent: "Patsy's Italian Restaurant Of New York"}
    );

    createDivider(infoContainer, "info-divider"); 
}

export default function() {
    createBanner()

    createInfoContainer();
}
