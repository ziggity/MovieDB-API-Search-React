import React, { Component } from 'react';
import './App.css';
import img from './movielogo.svg';
import MovieRow from './MovieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    console.log('initializer')
    // const movies = [
    //   {id: 0, poster_src:'https://cdn.movieweb.com/img.teasers.posters/FIAvHGAE1U3gDI_384_c/Justice-League.jpg', title: 'Avengers: Inifinity war', overview: "As the universe battles for the realm, they face off against Thanos!"},
    //   {id: 1, title: 'Avengers: Inifinity war', overview: "As the universe battles for the realm, they face off against Thanos!"}
    // ]
    
    // var movieRow = []
    // movies.forEach((movie)=>{
    //   console.log(movie.title)
    //   const movieRows = <MovieRows movie={movie} />
    //   movieRow.push(movieRows)
    // })
    // this.state = {rows: movieRow}
    this.performSearch()
  }
  performSearch(searchTerm){
    console.log('search')
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=014f86b604a00da321c812939566d32b`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log(searchResults)
        const results = searchResults.results
        var movieRows = []

        results.forEach((movie) => {
          console.log(movie)
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error:(xhr, status, err)=>{
        console.log('failed')
      }
    })
  }
  searchChangeHandler(event){
    
    const boundObject = this
    const searchTerm = event.target.value //<event className="target value"></event>
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <img src={img} width="50" alt="logo" className="logo1" />
                </td>
                <td>
                  <h3>Movies Search</h3>
                  </td>

              </tr>
            </tbody>
          </table>
          <input style={{
            fontSize: 24,
            display: 'block',
            width: '99%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }} onChange={this.searchChangeHandler.bind(this)}placeholder="Enter search term here"/>
        {this.state.rows}
        </div>
    );
  }
}

export default App;
