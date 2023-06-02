let totalSpent = 0;
let Games = [];
let purchasedGames = [];

window.addEventListener('load', function()
{
    const gamesContainer = document.getElementById("storeGamesContainer");
    fetch('../js/data.json')
        .then( (res) => res.json())
        .then( (res) => {
            res.forEach((game) => {

                Games = res;

                const gameCard = document.createElement('div');
                gameCard.className = "card col-xl-3 col-md-5 col-sm-12 border-0 h-100";
                gameCard.innerHTML =    `<img src=${game.image} class="card-img-top storeCardImage" alt=${game.name}>
                                        <div class="card-body border border-info ">
                                            <h5 class="card-title">${game.name}</h5>
                                            <p class="card-text">${game.description}</p>
                                            <p class="value"> ${"$ " + game.price} </p>
                                            <button id=${"buyButton" + game.ID} class="btn btn-primary">Buy</button>
                                        </div>`;
            
                gamesContainer.append(gameCard);
            });
        })
})

 setTimeout(() => {
    let ishinButton = document.getElementById("buyButton1");
    ishinButton.onclick = () =>{BuyGame(1)}
    let borderlands3Button = document.getElementById("buyButton2");
    borderlands3Button.onclick = () =>{BuyGame(2)}
    let psychonauts2Button = document.getElementById("buyButton3");
    psychonauts2Button.onclick = () =>{BuyGame(3)}
    let cupheadButton = document.getElementById("buyButton4");
    cupheadButton.onclick = () =>{BuyGame(4)}
    }, 500)

function UpdateTotalSpent(gamePrice)
{
    totalSpent += gamePrice;
}

function BuyGame(gameID)
{
    for (let i = 0; i < Games.length; i++)
    {
        if(Games[i].ID == gameID && Games[i].isAvailable)
        {
            Games[i].isAvailable = false;

            UpdateTotalSpent(Games[i].price);
            sessionStorage.setItem('totalSpent', totalSpent);

            purchasedGames.push(Games[i]);
            sessionStorage.setItem('games', JSON.stringify(purchasedGames));
        }
    }
}

