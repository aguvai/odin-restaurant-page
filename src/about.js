const contentDiv = document.querySelector("#content");

import { createElement, createMultipleElementsOfType } from "./createElement";

export default function () {
    createElement({
        elementType: "h1",
        appendTo: contentDiv,
        elementTextContent: "About page holder"
    });
}