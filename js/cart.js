const purchasedGames = sessionStorage.getItem('games');
const games = JSON.parse(purchasedGames);
const totalSpentJSON = sessionStorage.getItem('totalSpent');
const totalSpent = JSON.parse(totalSpentJSON);

window.addEventListener('load', function()
{
    let cartContainer = document.getElementById("cartContainer");

    for (const game of games)
    {
        let gameContainer = document.createElement("li");
        gameContainer.className = "cartItem";
        gameContainer.innerHTML =  `<img src=${game.image}></img>
                                    <h3> ${game.name} </h3>
                                    <h4 class="value"> ${"$ " + game.price} </h4>`;
        cartContainer.append (gameContainer);
    }
    
    let totalSpentContainer = document.getElementById("totalSpentContainer");

    let totalSpent = document.createElement("div")
        totalSpent.innerHTML = `<h4> Estimated Total: </h4> <h4 class="value"> ${"$ " + totalSpentJSON} </h4>`;
        totalSpentContainer.append(totalSpent);
})