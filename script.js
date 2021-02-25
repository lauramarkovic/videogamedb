const gamesDiv = document.querySelector(".games");

// API_KEY: 74f55409b1d8418bbdd080902a1a6313

const API_URL = "https://api.rawg.io/api/platforms?key=74f55409b1d8418bbdd080902a1a6313";

const GAME_URL = "https://api.rawg.io/api/games?key=74f55409b1d8418bbdd080902a1a6313&dates=2019-09-01,2019-09-30&platforms=18,1,7";

const date = new Date();

const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dayNow = date.getDate();

const currentDate = `${yearNow}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0{dayNow}` : dayNow}`;
const nextDate = `${yearNow + 1}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0{dayNow}` : dayNow}`;

const NEWGAMES_URL = `https://api.rawg.io/api/games?key=74f55409b1d8418bbdd080902a1a6313&dates=${currentDate},${nextDate}&page=1&page_size=10`;


async function fetchUpcomingGames(url) {
  const res = await fetch(url);
  const data = await res.json();
  showNewGames(data.results);
}

fetchUpcomingGames(NEWGAMES_URL);

function showNewGames(games) {
  gamesDiv.innerHTML = '';

  games.forEach(game => {
    const {
      name,
      background_image,
      released,
      metacritic
    } = game;
    const gameEl = document.createElement("div");
    gameEl.classList.add("game");
    gameEl.innerHTML = `
      <img src="${background_image}" alt="${name}" />
      <div class="game-text">
        <div class="game-info">
          <div class="platforms-icons">
            <i class="fab fa-playstation"></i>
            <i class="fab fa-xbox"></i>
          </div>
          <span class="rating">${metacritic}</span>
        </div>
        <h3>${name}</h3>
        <p>Genres: <span>Action, Adventure</span></p>
        <hr class="game-text-line" />
        <p>Release date: <span>${released}</span></p>
        <button>Show details</button>
      </div>
    `;
    gamesDiv.appendChild(gameEl);
  });
};