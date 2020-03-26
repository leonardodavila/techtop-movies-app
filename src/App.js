import React from "react";

import "./styles/App.css";
import { getStarWarsMovies } from "./api/movies";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button
} from "@material-ui/core";

import MoviesCard from "./components/movies-card";

class App extends React.Component {
  state = {
    movies: [],
    err: null
  };

  componentDidMount() {
    getStarWarsMovies()
      .then(moviesFromApi =>
        this.setState(() => {
          return {
            movies: moviesFromApi
          };
        })
      )
      .catch();
  }

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Star War Movies</Typography>
          </Toolbar>
        </AppBar>
        {this.state.movies.map(myMovie => {
          return <MoviesCard movie={myMovie} />;
        })}
      </>
    );
  }
}

export default App;
