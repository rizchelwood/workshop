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

## Set up Redux to manage Pokedex view

> Redux is a state management library for Javascript apps. It will help store and manage all of your state in your application. 

Add these dependencies in CodeSanbox or do an `npm install` if you're running the app locally.

```
react-redux
redux
```

Create an action to be able to add Pokemon. Add a folder in file to put all of your actions in `src/actions/index.js`.

In the file, create the action with the following type and parameter.

```
export const addPokemon = pokemon => {
  return {
    type: 'ADD_POKEMON',
    pokemon
  };
}
```

Create a reducer to contain all of your states and what to do if the Add Pokemon action has been called in `src/reducers/index.js`.

In the file, create the reducer.

```
import { combineReducers } from 'redux';

const pokemon = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [
        ...state,
        {
          data: action.pokemon,
        }
      ]
    default:
      return state
  }
}

export default combineReducers({
  pokemon: pokemon
});
```

Create the store in your `src/index.js` file. 

Import the following dependencies below the others. 

```
import { Provider } from 'react-redux';
import { createStore } from 'redux';
```

Create the store with the reducer you've created and wrap your `<App />` component in the Provider tags. 

```
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
  );
```

Now you should be able to access the state in your components. 

## Link Redux to containers and components

We want to be able to add Pokemon to our Pokedex. We need to hook up our addPokemon action to our Pokemon container. 

Import dependencies from `react-redux` below the other dependencies. 

```
import { connect } from 'react-redux';
```

Enable the container to be able to dispatch the addPokemon action and have access to the pokemon state. 

Before the `export default Pokemon` line insert the following: 

```
const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(addPokemon(pokemon))
});
```

Replace `export default Pokemon` with `export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);`.

This allows us to access the Pokemon state and addPokemon action through props. In the component, let's create an addPokemon function to call `this.props.addPokemon`. This will be a callback function that will later be called in the Card component. 

Add the following code between the class and render function: 

```
  constructor(props) {
    super(props)
    this.addPokemon = this.addPokemon.bind(this)
  }

  addPokemon(pokemon) {
    const { addPokemon } = this.props;
    addPokemon(pokemon);
  }
  ```

Add a new prop to our Card component for when a user wants to add a Pokemon to their Pokdex. Replace the Card component with the following: 

```
<Card key={pokemon.name} pokemon={pokemon} styles={styles} addPokemon={this.addPokemon} />
```

We need to add the button and call the addPokemon action to the Card component. Add the addPokemon prop to the propTypes. Below the pokemon propType, add `addPokemon: PropTypes.func,`. 

After the render() function add `addPokemon` to this.props object. 

Create the button element and call the addPokemon prop onClick below the `<p>{pokemon.types.toString()}</p>` tag. 

```
<button onClick={() => addPokemon(pokemon)}>Add Pokemon</button>
```

The Pokemon should be getting added to the Pokemon state whenever a user clicks the button but we still need to show these Pokemon under the Pokedex tab. 

In `src/containers/Pokedex` import the react-redux dependency below the other imports and Card component.

```
import { connect } from 'react-redux';
import Card from "../components/Card";
```

Map the Pokemon state to props so we can access it. Before the `export default Pokedex` line insert the following: 

```
const mapStateToProps = state => ({
  pokemon: state.pokemon
});
``` 

and replace `export default Pokedex` with `export default connect(mapStateToProps)(Pokedex);`. 

Show the Card component for each Pokemon in the Pokemon state. Replace `<p>This is my Pokedex</p>` with 

```
      {pokemon.map(pokemon => {
        return <Card key={pokemon.data.name} pokemon={pokemon.data} styles={styles} />
      })}
```

You should be able to see your saved Pokemon in the Pokedex tab now. We should remove the button if the view is in the Pokedex since it's already added. We'll do this by adding a new prop showButton. 

In the Pokedex container, add `showButton={false}` prop to the Card component. In the Pokemon container, add `showButton={true}` prop to the Card component.

In the Card component add `  showButton: PropTypes.bool.isRequired` at the end of the `Card.propTypes.` object and to the `this.props` object under the `render()` function. Replace the `<button></button>` element with the below code:

```
{showButton && <button onClick={() => addPokemon(pokemon)}>Add Pokemon</button>}
```

The above code will now only show the button if the card is in the Pokemon list. 

## Final result

Now you have a working app to add Pokemon to your Pokedex!! Congratulations you've completed the application of this workshop. Next, we will deploy this completed application with Kubernetes.
