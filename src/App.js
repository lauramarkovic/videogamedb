import React, { Component } from "react";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Games from "./pages/Games/Games";
import { currentDate, nextDate } from "./util/fetchGames";

import axios from "axios";

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: '',
      isLoading: true,
      startingDate: currentDate,
      fromDate: currentDate,
      toDate: nextDate
    }
  }

  componentDidMount() {
    this.fetchGames()
  }

  handleFromDate = (e) => {
    e.preventDefault();
    this.setState({
      fromDate: e.target.value
    }, () => {
      this.fetchGames()
    })
  }

  handleToDate = (e) => {
    e.preventDefault();
    this.setState({
      toDate: e.target.value
    }, () => {
      this.fetchGames()
    })
  }

  fetchGames = () => {
    axios.get(`https://api.rawg.io/api/games?key=74f55409b1d8418bbdd080902a1a6313&dates=${this.state.fromDate},${this.state.toDate}&page=1&page_size=20`)
      .then(res => {
        const data = res.data;
        const games = data.results;

        this.setState({ games, isLoading: false });
      })
  }

  render() {
    const { games, isLoading, startingDate, fromDate, toDate } = this.state;

    return (
      <div>
        <Header />
        {isLoading
          ? <Loader />
          : <Games
            games={games}
            startingDate={startingDate}
            fromDate={fromDate}
            toDate={toDate}
            handleFromDate={this.handleFromDate}
            handleToDate={this.handleToDate}
          />
        }
      </div>
    );
  }
}

export default App;