const contentDiv = document.querySelector("#content");

import { createElement } from "./createElement";

const createDivider = function(appendTo, type) {
    let divider = createElement({
        elementType: "div",
        appendTo: appendTo,
        elementClass: type,
    });
};

const createBanner = function() {
    let banner = createElement({
        elementType: "div",
        appendTo: contentDiv,
        elementClass: "banner",
    });

    createDivider(banner, "banner-divider");

    let restarauntName = createElement({
        elementType: "h1",
        appendTo: banner,
        elementTextContent: "Patsy's Italian Restaurant",
    });

    let restarauntSubtext = createElement({
        elementType: "h2",
        appendTo: banner,
        elementTextContent: "A New York landmark made famous by Frank Sinatra",
    });

    createDivider(banner, "banner-divider");

    let menuButton = createElement({
        elementType: "button",
        appendTo: banner,
        elementTextContent: "VIEW ALL DAY MENU",
    });
};

const createInfoContainer = function() {
    let infoContainer = createElement({
        elementType: "div",
        appendTo: contentDiv,
        elementClass: "info-container",
    });

    createDivider(infoContainer, "info-divider");

    let infoHeader = createElement({
        elementType: "h2",
        appendTo: infoContainer,
        elementTextContent: "Patsy's Italian Restaurant Of New York",
    });

    createDivider(infoContainer, "info-divider");
};

export default function() {
    createBanner();
    createInfoContainer();
}
