const contentDiv = document.querySelector("#content");

import {createElement} from "./createElement";

function createDivider(banner) {
    let divider = createElement(
        "div", banner, {elementIdentifier: "banner-divider"}
    );
}

function createBanner() {
    let banner = createElement(
        "div", contentDiv, {elementIdentifier: "banner"}
    );

    createDivider(banner);

    let restarauntName = createElement(
        "h1", banner, {elementTextContent: "Patsy's Italian Restaurant"}
    );

    let restarauntSubtext = createElement(
        "h2", banner, {elementTextContent: "A New York landmark made famous by Frank Sinatra"}
    );

    createDivider(banner);

    let menuButton = createElement(
        "button", banner, {elementTextContent: "VIEW ALL DAY MENU"}
    );
}

export default function() {
    createBanner()
}
