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

const createMultipleElementsOfType = function(properties) {
    // properties = { 
    //                elementType,
    //                appendTo,
    //                elementClass,
    //                [textContent for each element]
    //              }

    for (let pass = 0; pass < properties.elementTextContent.length; pass++) {
        createElement({
            elementType: properties.elementType,
            appendTo: properties.appendTo,
            elementClass: properties.elementClass,
            elementTextContent: properties.elementTextContent[pass],
        })
    }
}

export {createElement, createMultipleElementsOfType};