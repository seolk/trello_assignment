import React from 'react'
import axios from 'axios'
import BoardForm from './BoardForm';
import ListForm from './ListForm';
import List from './List';

class Board extends React.Component {
  state = { board: {}, lists: [], edit: false }

  componentDidMount() {
    axios.get(`/api/boards/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ board: res.data })
      })
    axios.get(`/api/boards/${this.props.match.params.id}/lists`)
      .then(res => {
        this.setState({ lists: res.data })
      })
  }

  toggleEdit = () => {
    this.setState(state => {
      return { edit: !this.state.edit }
    })
  }

  showForm = () => {
    const { board: { name } } = this.state
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

  edit = () => {
    return <BoardForm {...this.state.board} submit={this.submit} />
  }

  submit = (board) => {
    axios.put(`/api/boards/${this.props.match.params.id}`, { board })
      .then(res => {
        this.setState({ board: res.data, edit: false })
      })
  }

  addItem = (name) => {
    axios.post(`/api/boards/${this.props.match.params.id}/lists`, { name })
      .then( res => {
        const { lists } = this.state;
        this.setState({ lists: [...lists, res.data] })
      })
  }

  updateList = (id) => {
    axios.put(`/api/boards/${this.props.match.params.id}/lists`)
      .then( res => {
        const lists = this.state.lists.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ lists });
    })
  }

  deleteList = (id) => {
    axios.delete(`/api/boards/${this.props.match.params.id}/lists`)
      .then( res => {
        const { lists } = this.state;
        this.setState({ lists: lists.filter(t => t.id !== id) })
    })
  }

  render() {
    const { edit, lists } = this.state
    return (
      <div>
        {edit ? this.edit() : this.showForm()}
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
        <ListForm addList={this.addList} />
        {
          lists.map( list => 
            <List
            key={list.id}
            {...list}
            // deleteList={deleteList}
          />
        )}
      </div>
    )
  }

}

export default Board;