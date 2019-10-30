
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'
import './normalize.css'
import React, { Component } from 'react'
export default class App extends Component {
  state={
    film:TMDB.films,
    faves:[],
    current:{}
  }
  render() {
    return (
      <div className="film-library">
   
       
      <FilmListing film ={this.state.film} fave = {this.state.faves}  handleFaveToggle={() => this.props.handleFaveToggle()} />
​
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetails film={this.state.film} current={this.state.current} />
        
      </div>
​
    </div>
    )
  }
}

