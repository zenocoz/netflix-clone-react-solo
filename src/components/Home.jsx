import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import CommentList from "./CommentList"
import Header from "./Header"
import Results from "./Results"

import Gallery from "./Gallery"
import {Container, Row} from "react-bootstrap"
import {BrowserRouter as Router, Route} from "react-router-dom"

class Home extends React.Component {
  state = {
    movies: [],
  }

  fetchMovies = async (query) => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&s=${query}`
    )
    let result = await response.json()
    console.log(result)
    let res = await result
    console.log(res)
    this.setState({movies: res.Search})
  }

  onChange = (e) => {
    if (e.target.value.length >= 3) {
      console.log(e.target.value)
    }
  }

  onKeyDown = (e) => {
    // when someone pressed any button
    if (e.target.value.length >= 3 && e.key === "Enter") {
      e.preventDefault()
      this.fetchMovies(e.target.value)
    }
  }

  render() {
    console.log(this.state.movies)

    return (
      <>
        <Header />
        <CommentList />
        <Container>
          <h1 style={{position: "relative", top: 90 + "vh"}}>
            Most popular sagas:
          </h1>
          <Row
          //   style={{
          //     height: 60 + "vh",
          //     position: "relative",
          //     top: 90 + "vh",
          //   }
          // }
          >
            <Gallery saga="Harry Potter" />
            <Gallery saga="Lord of the Rings" />
            <Gallery saga="Star Wars" />
          </Row>

          <Row style={{position: "relative", top: 110 + "vh"}}>
            {this.state.movies.length > 0 && <h1>Search Results:</h1>}
            <Results results={this.state.movies} />
          </Row>
        </Container>
      </>
    )
  }
}
export default Home
