import React from 'react'
import { Header, Button, Icon } from 'semantic-ui-react';

const List = ({ id, name, deleteList }) => (
  <div style={styles.flex}>
    <Header style={{marginLeft: "15px"}}>{name}</Header>
    <Button 
      icon
      color="red"
      size="tiny"
      onClick={() => deleteList(id)}
      style={{marginLeft: "16px"}}
    >
      <Icon name="trash" />    
    </Button>
  </div>
)

const styles = {
  pointer: {
    cursor: 'pointer' 
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
}

export default List;