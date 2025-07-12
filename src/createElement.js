const createElement = function (elementProperties) {
    // elementProperties = {element's class/id, element's textContent}

    const element = document.createElement(elementProperties.elementType);
    if (elementProperties.elementClass) {
        element.classList.add(elementProperties.elementClass);
    }
    if (elementProperties.elementTextContent) {
        element.textContent = elementProperties.elementTextContent;
    }
    elementProperties.appendTo.appendChild(element);

    return element;
};

export {createElement};