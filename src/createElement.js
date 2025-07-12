const createElement = function (elementProperties) {
    const element = document.createElement(elementProperties.elementType);
   
    if (elementProperties.elementClass) {
        element.classList.add(elementProperties.elementClass);
    };

    if (elementProperties.elementTextContent) {
        element.textContent = elementProperties.elementTextContent;
    };

    if (elementProperties.elementAttributes) {
        let attributes = elementProperties.elementAttributes;
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute])
        }
    };

    elementProperties.appendTo.appendChild(element);

    return element;
};

export {createElement};