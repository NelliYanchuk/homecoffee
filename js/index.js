const requestURL = '../json/coffees.json'

async function fetchCoffeeJson() {
    const response = await fetch(requestURL)
    const coffees = await response.json()
    return coffees
}

fetchCoffeeJson().then(coffee => {
    for (let index = 0; index < coffee.coffees.length; index++) {
        let id = coffee.coffees[index].id
        let title = coffee.coffees[index].title
        let description = coffee.coffees[index].description
        let country = coffee.coffees[index].country
        let price = coffee.coffees[index].price
        let currency = coffee.coffees[index].currencyFormat
        let image = coffee.coffees[index].image

        houseSection.innerHTML += `
            
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h5 class="card-title">${id}.${title} ${country} ${price}€</h5>
            <p class="card-subtitle"> Country: ${country}  Price: ${price} ${currency}/per kilo</p>
            <p class="card-text">${description}</p>
        </div>
        </div>
        
        `
    }
})
