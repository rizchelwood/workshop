import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center'
  },
  nav: {
    margin: '20px',
    textDecoration: 'none',
    color: '#00b6cb',
    borderBottom: 'none'
  },
  active: {
    borderBottom: '1px solid #00b6cb'
  }
};

class Tabs extends Component {
  render() {
    return (
      <div>
          <ul style={styles.list}>
            <li style={styles.item}>
              <NavLink exact={true} to="/"  style={styles.nav} activeStyle={styles.active}>Pokemon</NavLink>
            </li>
            <li>
              <NavLink to="/pokedex" style={styles.nav} activeStyle={styles.active}>Pokedex</NavLink>
            </li>
          </ul>
      </div>
    );
  }
}

export default Tabs;
