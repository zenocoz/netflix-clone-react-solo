import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import NetflixNavBar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Registration from "./components/Registration"
import Home from "./components/Home"

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          {" "}
          <NetflixNavBar onKeyDown={this.onKeyDown} onChange={this.onChange} />
          <Route path="/" exact component={Home} />
          <Route path="/registration" exact component={Registration} />
        </>
      </Router>
    )
  }
}
export default App
