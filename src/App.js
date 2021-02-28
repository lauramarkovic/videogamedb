import React, { Component } from "react";
import Header from "./Header/Header";
import Games from "./Games/Games";
import { currentDate, nextDate } from "./util/fetchGames";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }
  componentDidMount() {
    fetch(`https://api.rawg.io/api/games?key=74f55409b1d8418bbdd080902a1a6313&dates=${currentDate},${nextDate}&page=1&page_size=10`)
      .then(response => response.json())
      .then(games => this.setState({ games: games.results }))
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        <Header />
        <Games games={games} />
      </div>
    );
  }
}

export default App;