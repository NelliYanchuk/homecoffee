//const requestURL = '../json/coffees.json'
const requestURL = 'http://localhost:3000/coffees'

async function fetchCoffeeJson () {
  const response = await fetch(requestURL)
  const coffees = await response.json()
  return coffees
}

fetchCoffeeJson().then(coffeeArray => {
  for (let index = 0; index < coffeeArray.length; index++) {
    let id = coffeeArray[index].id
    let title = coffeeArray[index].title
    let description = coffeeArray[index].description
    let country = coffeeArray[index].country
    let price = coffeeArray[index].price
    let currency = coffeeArray[index].currencyFormat
    let image = coffeeArray[index].image

    coffeeSection.innerHTML += `

        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div>
            <h5>${id}.${title} ${country}</h5>
            <p class="card-subtitle"> Country: ${country}</p>
            <p class="card-subtitle"> Price: ${price} ${currency}/per kilo</p>
            <div class="image-container">
                <img src="https://i.postimg.cc/ryRCMbXq/coffee-icon.png" class="card-coffee-icon" alt="coffee_icon" width="50">
            </div>
            <p>${description}</p>
        </div>
        </div>

        `
  }
})
