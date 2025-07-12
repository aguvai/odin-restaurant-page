const createElement = function (elementType, appendTo, elementProperties) {
    // elementProperties = {element's class/id, element's textContent}

    const element = document.createElement(elementType);
    if (elementProperties.elementIdentifier) {
        element.classList.add(elementProperties.elementIdentifier);
    }
    if (elementProperties.elementTextContent) {
        element.textContent = elementProperties.elementTextContent;
    }
    appendTo.appendChild(element);

    return element;
};

export {createElement};