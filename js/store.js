let totalSpent = 0;

function Game(name, price, image)
{
    this.name = name;
    this.price = price;
    this.image = image;
}

const Games = [
    ishin = new Game("Like a Dragon: Ishin!", 60, "../assets/img/Ishin.webp"),
    borderlands3 = new Game("Borderlands 3", 50, "../assets/img/Borderlands3.jpg"),
    psychonauts2 = new Game("Psychonauts 2", 35, "../assets/img/Psychonauts2.jpg"),
    cuphead = new Game("Cuphead", 15, "../assets/img/CupheadY.jpg")
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
        if(Games[i].name == gameName)
        {
            UpdateTotalSpent(Games[i].price);
            sessionStorage.setItem('game'+ i, [Games[i].name, Games[i].price, Games[i].image]);
        }
    }
}

