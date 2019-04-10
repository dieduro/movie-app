import React, { Component } from 'react';
import Header from './components/Header';
import MoviesContainer from "./components/MoviesContainer";
import MoviePage from "./components/MoviePage";
import "./reset.css";
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      movie: null,
      search: ''
    };
    this.handleClickOnMovie = this.handleClickOnMovie.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  handleClickOnMovie(movie) {
    this.setState({ movie })
  }

  handleBack() {
    this.setState({ movie: null })
  }

  onInputChange(input) {
    this.setState({ search: input });
  }

  render() {
    return (
      <div className="app">
        {this.state.movie ? (
          <MoviePage movie={this.state.movie} handleBack={this.handleBack}/>
        ) : (
          <div>
            <Header onInputChange={this.onInputChange} inputValue={this.state.search}/>
            <MoviesContainer
              handleClick={this.handleClickOnMovie}
                search={this.state.search}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
