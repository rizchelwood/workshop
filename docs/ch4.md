# Chapter 4: Create Pokedex container with Redux state management

Our goal for this section is create a Pokedex container and use Redux to manage its state.

## Instructions

We are going to create a Pokedex container and a Redux action, reducer, and store to save the data that will populate the Pokedex. 

## Add routes for Pokemon and Pokedex view

Create Pokdex in component in `src/containers/Pokedex.js`. Insert the following in your Pokedex container. 

```
import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    padding: "20px",
    width: "200px",
    height: "250px",
    border: "1px solid red",
    margin: "20px"
  },
  image: {
    width: "100px",
    height: "100px"
  }
};

class Pokedex extends Component {
  render() {
    return (
      <div style={styles.list}>
        <p>This is my Pokedex</p>
      </div>
    );
  }
}

export default Pokedex;
```

Add the `react-router-dom` dependency in CodeSanbox or do `npm install react-router-dom` if you're running the app locally.

In `src/App.js` import `react-router-dom` and the Pokedex container below the previous imports. 

```
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
```

Insert your Router under the `<h1></h1>` tag. 

```
  <Router>
    <div>
      <Tabs/>
      <Route exact={true} path="/" component={Pokemon} />
      <Route path="/pokedex" component={Pokedex} />
    </div>
  </Router>
```

> The code above specifies which component to show depending on the path you enter. 

You should be able to enter either path and it will show the right component. We want the user to be able to switch tabs between the Pokemon list and Pokedex instead of entering in the path. Let's create a Tabs component.

Create a Tabs component in `src/components/Tabs`. Paste this into the Tabs component. 

```
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
    color: 'red',
    borderBottom: 'none'
  },
  active: {
    borderBottom: '1px solid red'
  }
}

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
```

> We are creating an unordered list of links so the user can click and be directed to the tab they choose. 

At this point, you should be able to go back and forth from your Pokemon and Pokedex component. 

## Manage the Pokedex view with Redux

> Redux is a state management library for Javascript apps. It will help store and manage all of your state in your application. 










