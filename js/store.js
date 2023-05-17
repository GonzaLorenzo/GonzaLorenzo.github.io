let totalSpent = 0;
let purchasedGames = [];

function Game(name, price, image, isAvailable)
{
    this.name = name;
    this.price = price;
    this.image = image;
    this.isAvailable = isAvailable;
}

const Games = [
    ishin = new Game("Like a Dragon: Ishin!", 60, "../assets/img/Ishin.webp", true),
    borderlands3 = new Game("Borderlands 3", 50, "../assets/img/Borderlands3.jpg", true),
    psychonauts2 = new Game("Psychonauts 2", 35, "../assets/img/Psychonauts2.jpg", true),
    cuphead = new Game("Cuphead", 15, "../assets/img/CupheadY.jpg", true)
];

window.addEventListener('load', function()
{
    let ishinButton = document.getElementById("ishinButton");
    ishinButton.onclick = () =>{BuyGame(ishin.name)}
    let borderlands3Button = document.getElementById("borderlands3Button");
    borderlands3Button.onclick = () =>{BuyGame(borderlands3.name)}
    let psychonauts2Button = document.getElementById("psychonauts2Button");
    psychonauts2Button.onclick = () =>{BuyGame(psychonauts2.name)}
    let cupheadButton = document.getElementById("cupheadButton");
    cupheadButton.onclick = () =>{BuyGame(cuphead.name)}
})

function UpdateTotalSpent(gamePrice)
{
    totalSpent += gamePrice;
}

function BuyGame(gameName)
{
    for (let i = 0; i < Games.length; i++)
    {
        if(Games[i].name == gameName && Games[i].isAvailable)
        {
            Games[i].isAvailable = false;

            UpdateTotalSpent(Games[i].price);
            sessionStorage.setItem('totalSpent', totalSpent);
            console.log(totalSpent);

            purchasedGames.push(Games[i]);
            sessionStorage.setItem('games', JSON.stringify(purchasedGames));
        }
    }
}

