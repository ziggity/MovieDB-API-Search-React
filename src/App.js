import React, { Component } from 'react';
import './App.css';
import img from './movielogo.svg';
import MovieRows from './MovieRows';
class App extends Component {
  constructor(props){
    super(props)
    console.log('initializer')
    const movies = [
      {id: 0, poster_src:'https://cdn.movieweb.com/img.teasers.posters/FIAvHGAE1U3gDI_384_c/Justice-League.jpg', title: 'Avengers: Inifinity war', overview: "As the universe battles for the realm, they face off against Thanos!"},
      {id: 1, title: 'Avengers: Inifinity war', overview: "As the universe battles for the realm, they face off against Thanos!"}
    ]
    
    var movieRow = []
    movies.forEach((movie)=>{
      console.log(movie.title)
      const movieRows = <MovieRows movie={movie} />
      movieRow.push(movieRows)
    })
    this.state = {rows: movieRow}
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
          }} placeholder="Enter search term here"/>
          {this.state.rows}
        </div>
    );
  }
}

export default App;
