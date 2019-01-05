import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BoardForm from './BoardForm'
import { List, Header, Icon } from 'semantic-ui-react'

class Boards extends React.Component {
  state = { boards: [], showForm: false }

  componentDidMount() {
    axios.get('/api/boards')
      .then(res => {
        this.setState({ boards: res.data })
      })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  form = () => {
    return <BoardForm submit={this.submit} />
  }

  submit = (board) => {
    axios.post('/api/boards', { board })
      .then(res => {
        this.setState({ boards: [res.data, ...this.state.boards], showForm: false })
      })
  }

  listBoards = () => {
    return this.state.boards.map(b => {
      return (
        <List divided relaxed key={b.id}>
          <List.Item>
            <List.Icon name='tasks' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header>
                <Link to={`/boards/${b.id}`}>{b.name}</Link>
              </List.Header>
              <List.Description>
                <p>Click to go to {b.name} board.</p>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      )
    })
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <Header as='h2'>
          <Icon name='columns' />
          <Header.Content>
            Boards
            <Header.Subheader>Manage and create boards</Header.Subheader>
          </Header.Content>
        </Header>
        <button onClick={this.toggleForm}>{showForm ? 'Cancel' : 'Create New Board'}</button>
        {showForm ? this.form() : this.listBoards()}
      </div>
    )
  }

}

export default Boards;