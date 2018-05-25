import React, { Component } from 'react';
import './App.css';
import img from './download.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <img src={img} width="50" alt="logo" className="logo1" />
                </td>
                <td>
                  <h3>  Movies Search</h3>
                
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
        </div>
    );
  }
}

export default App;
