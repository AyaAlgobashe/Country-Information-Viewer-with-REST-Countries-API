

const countryCard = function (countryData) {

    for (let countryObject of countryData) {
    let containerDiv = document.createElement("div");
    let picturFlag, countryHeader,countryRegion,countryInfo


        for (let property in countryObject) {
            if (property == "flags") {
                picturFlag = document.createElement("img");
                picturFlag.src = countryObject[property]["png"];
                containerDiv.append(picturFlag);
            }
            if (property == "name") {
                createNewElement(countryHeader, "h1",
                countryObject["name"], containerDiv)

            }
            if (property == "region") {
                createNewElement(countryRegion, "h2",
                countryObject["region"], containerDiv)
            }
            if (property == "population") {
                createNewElement(countryInfo, "p", 
                countryObject["population"], containerDiv, "population");
            }
            if (property == "languages") {
                createNewElement(countryInfo, "p", 
                countryObject["languages"][0]["name"], containerDiv, "languages");
            }
            if (property == "currencies") {
                createNewElement(countryInfo, "p", 
                countryObject["currencies"][0]["name"], containerDiv, "currencies");

            }
        }
        return containerDiv;
    }

}


let createNewElement = function (element, elementTage, propertyValue, parent, className) {
    element = document.createElement(elementTage);
    element.innerText = propertyValue;
    parent.append(element);
    element.classList.add(className)
}

