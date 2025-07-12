const contentDiv = document.querySelector("#content");

import { createElement } from "./createElement";

const createDivider = function(appendTo, divType) {
    let divider = createElement({
        elementType: "div",
        appendTo: appendTo,
        elementClass: divType,
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

    let operatedByText = createElement({
        elementType: "h3",
        appendTo: infoContainer,
        elementTextContent: "OWNED AND OPERATED BY THE SCOGNAMILLO FAMILY SINCE 1944",
    })

    let addressText = createElement({
        elementType: "h3",
        appendTo: infoContainer,
        elementTextContent: "236 W. 56th St., New York, New York",
    })

    let phoneText = createElement({
        elementType: "h3",
        appendTo: infoContainer,
        elementTextContent: "212-247-3491", 
    })

    createDivider(infoContainer, "info-divider");
};

const createVisitUsContainer = function(){
    let visitUsContainer = createElement({
        elementType: "div",
        appendTo: contentDiv,
        elementClass: "visit-us",
    })

    let visitUsHeader = createElement({
        elementType: "h1",
        appendTo: visitUsContainer,
        elementTextContent: "Visit Us"
    })

    createDivider(visitUsContainer, "info-divider")

    let locationContainer = createElement({
        elementType: "div",
        appendTo: visitUsContainer,
        elementClass: "location-container",
    })

    let map = createElement({
        elementType: "iframe",
        appendTo: locationContainer,
        elementAttributes: {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8356633773506!2d-73.98531572338615!3d40.7656390713857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f7fcad6cdb%3A0xa98fe24a9c1cfe15!2sPatsy's%20Italian%20Restaurant!5e0!3m2!1sen!2sus!4v1752286358886!5m2!1sen!2sus",
            width: "400",
            height: "300",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
        }
    })
}

export default function() {
    createBanner();

    createInfoContainer();

    createVisitUsContainer();
}
