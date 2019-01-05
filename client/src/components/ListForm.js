import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";

class ListForm extends Component {
  state = { name: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value = {name}
          placeholder="Add List"
          onChange={this.handleChange}
        />
        <Button size="small" type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default ListForm;