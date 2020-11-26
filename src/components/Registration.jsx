import React, {Component} from "react"
import {Form} from "react-bootstrap"

export default class Registration extends Component {
  state = {}

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value=""
            id="name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="surname"
            value=""
            id="surname"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value=""
            id="email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="passowrd"
            value=""
            id="password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Year Of Birth</Form.Label>
          <Form.Control
            type="number"
            placeholder="year of birth"
            value=""
            id="birth"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            value=""
            id="address"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="city"
            value=""
            id="city"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="postal code"
            value=""
            id="cap"
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
    )
  }
}
