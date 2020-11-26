import React, {Component} from "react"
import {Form, Container, Row, Col} from "react-bootstrap"

export default class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      yearOfBirth: "",
      address: "",
      city: "",
      postalCode: "",
    },
  }

  handleForm = (e) => {
    let updatedRegistration = {...this.state.registration}
    let currentId = e.currentTarget.id
    updatedRegistration[currentId] = e.currentTarget.value
    this.setState({registration: updatedRegistration})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="col-6 offset-3">
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={this.state.registration.name}
                  id="name"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="surname"
                  value={this.state.registration.surname}
                  id="surname"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={this.state.registration.email}
                  id="email"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="passowrd"
                  value={this.state.registration.passowrd}
                  id="password"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Year Of Birth</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="year of birth"
                  value={this.state.registration.yearOfBirth}
                  id="yearOfBirth"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="address"
                  value={this.state.registration.address}
                  id="address"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="city"
                  value={this.state.registration.city}
                  id="city"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="postal code"
                  value={this.state.registration.cap}
                  id="cap"
                  onChange={this.handleForm}
                  required
                />
              </Form.Group>
              {/* <Form.Group>
                      <Form.Label>Credit Card</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="postal code"
                        value=""
                        id="cap"
                      />
                    </Form.Group> */}
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
