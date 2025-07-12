const contentDiv = document.querySelector("#content");

import {createElement} from "./createElement";

function createBanner() {
    let banner = createElement(
        "div", contentDiv, {elementIdentifier: "banner"}
    );

    let divider = createElement(
        "div", banner, {elementIdentifier: "banner-divider"}
    );

    let restarauntName = createElement(
        "h1", banner, {elementTextContent: "Patsy's Italian Restaurant"}
    );
}

export default function() {
    createBanner()
}
