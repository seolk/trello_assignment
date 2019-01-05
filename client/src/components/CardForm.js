import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";

class CardForm extends Component {
  state = { name: '', body: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.price)
    this.setState({ name: '', price: '' })
  }

  render() {
    const { name, body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            label="Name"
            name='name'
            value = {name}
            required
            placeholder="Add Name"
            onChange={this.handleChange}
            />
          <Form.Input
            label="Text"
            name='body'
            value = {body}
            required
            placeholder='Enter Text' 
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button size="small" type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default CardForm;