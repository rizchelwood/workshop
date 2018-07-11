# Chapter 4: Create Pokedex container with Redux state management

Our goal for this section is create a Pokedex container and use Redux to manage and populate its state.

## Instructions

We are going to create a Pokedex container and a Redux action, reducer, and store to save the data that will populate the Pokedex. 

## Add routes for Pokemon and Pokedex view

Create Pokdex in container in `src/containers/Pokedex.js`. Insert the following in your Pokedex container. 

```
import React, { Component } from 'react';

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    color: "#707070",
    padding: "20px 20px 0 20px",
    width: "200px",
    height: "250px",
    border: "2px solid #E8E8E8",
    margin: "20px",
    boxShadow: "2px 2px 2px #E8E8E8"
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

Add the `react-router-dom` dependency in CodeSanbox or do `npm install react-router-dom --save` if you're running the app locally.

In `src/App.js` import the dependency and Pokedex container below the other imports.

```
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
```

Insert your Router under the h1 tag and remove the Pokemon tag. 

```
  <Router>
    <div>
      <Route exact={true} path="/" component={Pokemon} />
      <Route path="/pokedex" component={Pokedex} />
    </div>
  </Router>
```

> The code above specifies which component to show depending on the path you enter. 

You should be able to enter either path and it will show the right component. We want the user to be able to switch tabs between the Pokemon list and Pokedex instead of entering in the path. Let's create a Tabs component.

Create a Tabs component in `src/components/Tabs.js`. Paste this into the Tabs component. 

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
```

> We are creating an unordered list of links so the user can click and be directed to the tab they choose. 

Import the Tabs component into `src/App.js` below the imports.

```
import Tabs from "./components/Tabs.js";
```

Insert the Tabs component above the first Route tag. 

```
<Tabs />
```

At this point, you should be able to go back and forth from your Pokemon and Pokedex component by clicking on the Tabs component.. 

## Set up Redux to manage Pokedex view

> Redux is a state management library for Javascript apps. It will help store and manage all of your state in your application. 

Add these dependencies in CodeSanbox or do an `npm install` if you're running the app locally.

```
react-redux
redux
```

Create an action to be able to add Pokemon. Add a folder and file to put all of your actions in `src/actions/index.js`.

In the file, create the action with the following type and parameter. The code below takes in pokemon as a parameter and returns 'ADD_POKEMON' type and the pokemon parameter.

```
export const addPokemon = pokemon => {
  return {
    type: 'ADD_POKEMON',
    pokemon
  };
}
```

Create a reducer to contain all of your states and what to do if the 'Add Pokemon' action has been called in `src/reducers/index.js`.

In the file, create the reducer. The code below sets the initial state as an empty array then when the 'ADD_POKEMON' action is called, it adds the pokemon parameter from the action and appends it to the existing state array.

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
import rootReducer from './reducers';
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

In `src/containers/Pokemon.js`, import the dependency and action below the other imports. 

```
import { connect } from 'react-redux';
import { addPokemon } from '../actions';
```

Enable the container to be able to dispatch the 'addPokemon' action and have access to the pokemon state and be able to add to our state.

Insert the following before the `export default Pokemon` line.

```
const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(addPokemon(pokemon))
});
```

Replace `export default Pokemon` with `export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);`.

This allows us to access the Pokemon state and 'addPokemon' action through props. In the component, let's create an addPokemon function to call `this.props.addPokemon`. This will be a callback function that will later be called in the Card component. 

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

We need to add the button and call the 'addPokemon' action to the Card component. In `src/components/Card.js` add the 'addPokemon' prop to the propTypes. Below the pokemon propType, add `addPokemon: PropTypes.func,`. 

```
Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  addPokemon: PropTypes.func,
}
```

After the `render()` function add `addPokemon` to this.props object. 

```
const { styles, pokemon, addPokemon } = this.props;
```

Create the button element and call the 'addPokemon' prop onClick below the `<p>{pokemon.types.toString()}</p>` tag. 

```
<button style={styles.button} onClick={() => addPokemon(pokemon)}>Add Pokemon</button>
```

The Pokemon should be getting added to the state whenever a user clicks the button but we still need to show these Pokemon under the Pokedex tab. 

In `src/containers/Pokedex` import the dependency and Card component below the other imports. 

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

Between the `render()` function and `return`, create the props object.

```
const { pokemon } = this.props;
```

Show the Card component for each Pokemon in the Pokemon state. Replace `<p>This is my Pokedex</p>` with 

```
  {pokemon.map(pokemon => {
    return <Card key={pokemon.data.name} pokemon={pokemon.data} styles={styles} />
  })}
```

You should be able to see your saved Pokemon in the Pokedex tab now. We should remove the button if the view is in the Pokedex since it's already added. We'll do this by adding a new prop showButton. 

In the Pokedex container `src/containers/Pokedex.js`, add `showButton={false}` prop to the Card component. 

```
<Card key={pokemon.data.name} pokemon={pokemon.data} styles={styles} showButton={false} />
````

In the Pokemon container `src/containers/Pokemon.js`, add `showButton={true}` prop to the Card component.

```
<Card key={pokemon.name} pokemon={pokemon} styles={styles} addPokemon={this.addPokemon} showButton={true}/>
````

In the Card component `src/components/Card.js` add `showButton: PropTypes.bool.isRequired` at the end of the `Card.propTypes.` object and add `showButton` to the `this.props` object under the `render()` function.

```
Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  addPokemon: PropTypes.func,
  showButton: PropTypes.bool.isRequired
}
```

```
const { styles, pokemon, addPokemon, showButton } = this.props;
```

Replace the `<button></button>` element with the code below:

```
{showButton && <button style={styles.button} onClick={() => addPokemon(pokemon)}>Add Pokemon</button>}
```

The above code will now only show the button if the card is in the Pokemon list. 

## Clean up code

If you'd like to clean up the code, you can remove the Card styles in the Pokemon and Pokedex containers and move it to the Card component since there are overlapping styles. 

## Final result

Now you have a working app to add Pokemon to your Pokedex!! Congratulations you've completed the application of this workshop. Next, we will deploy this completed application with Kubernetes.

![Workshop gif](./images/workshop.gif)

### Resources
- Redux: [https://redux.js.org/introduction](https://redux.js.org/introduction)
