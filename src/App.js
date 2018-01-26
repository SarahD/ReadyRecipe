import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

const t = axios.get('./users.json')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })

console.log(t)

class App extends Component {
  render = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

export default App
