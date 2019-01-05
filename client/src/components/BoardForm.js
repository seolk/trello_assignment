import React from 'react';
import { Form } from "semantic-ui-react";

class BoardForm extends React.Component {
  defaultValues = { name: '' }
  state = { ...this.defaultValues }

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const board = { ...this.state }
    this.props.submit(board)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Board Name' name='name' value={this.state.name} onChange={this.handleChange} required />
          <Form.Button circular basic color='blue' content='submit' />
        </Form.Group>
      </Form>
      
    )
  }
}

export default BoardForm;