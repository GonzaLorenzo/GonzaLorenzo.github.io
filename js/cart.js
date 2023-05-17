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
    let cartContainer = document.getElementById("cartContainer");

    for (const game of Games)
    {
        let gameContainer = document.createElement("li");
        gameContainer.className = "cartItem";
        gameContainer.innerHTML =  `<img src=${game.image}></img>
                                    <h3> ${game.name} </h3>
                                    <h4 class="value"> ${"$ " + game.price} </h4>`;
        cartContainer.append (gameContainer);
    }
})