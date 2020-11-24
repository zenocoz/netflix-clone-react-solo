import React from "react"

class ShowDetail extends React.Component {

    state = {
        movie: null
    }

    componentDidMount = async () => {
        let movieIdFromTheSearchBar = this.props.match.params.details;
await this.getMovie(movieIdFromTheSearchBar)
        //make a fetch
        

}


    getMovie = async (id) => {
        //fetch from server all movie objects of a saga or genre
        //set the constructor according to the resul
    
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=a0871843&i=${id}`
        )
    
        if (response.ok) {
          let result = await response.json() //search object
          console.log(result)
          this.setState({ movie: result })
        } else {
          alert("something went wrong")
        }
      }


    render() {
        return (
            <Container>
                {this.state.movie &&
                    <div>
                        <Row className="my-2">
                            <Col md={3}>
                                <img src={'/' + this.state.movie.image} alt="movie" className="img-fluid" />
                            </Col>
                            <Col md={9}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{this.state.movie.name}</Card.Title>
                                        <Card.Subtitle>
                                            <Badge variant="danger">{this.state.movie.label}</Badge>
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.movie.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
         
                    </div>}
                {!this.state.dish && <h1>LOADING</h1>}
            </Container>
        )
    }
}

}

export default ShowDetail
