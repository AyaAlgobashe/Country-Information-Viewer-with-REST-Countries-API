async function cuntryCard(countryName) {


    try {

        let response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
        let data = await response.json();
        document.querySelector(".card").append(countryCard(data));

        //////////////////neighborCountry///////////////
        let neighborCountry = data[0].borders[0];
        if (neighborCountry) {
            let neighbor = await fetch(`https://restcountries.com/v2/name/${neighborCountry}`);
            let neighborData = await neighbor.json();

            document.querySelector(".card").append(countryCard(neighborData));
        }
        else {
            throw new Error("No neighbor");
        }

    } 
    catch (error) {
        console.log(error);
    }

};
cuntryCard("Algeria")