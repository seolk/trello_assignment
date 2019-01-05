import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Segment, Icon } from 'semantic-ui-react';

const NavBar = () => (
  <Segment basic textAlign='center'>
    <Header as='h1' textAlign='center' color='blue'><Icon name='comment' />Trello  </Header>
      <nav>
        <Menu>
        <Menu.Item>
          <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink>
          {' '}
        </Menu.Item>
        <Menu.Item>
          <NavLink activeStyle={styles.active} to='/about'>About</NavLink>
          {' '}
        </Menu.Item>
        <Menu.Item>
          <NavLink activeStyle={styles.active} to='/boards'>Boards</NavLink>
        </Menu.Item>
        </Menu>
      </nav>
  </Segment>

)

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

export default NavBar