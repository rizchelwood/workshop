# Chapter 2: Build Pokemon card view 

Our goal for this section is to create a container and component to build a list of Pokemon with mock data. You will learn how to more about creating a container and component, and pass props from parent to child. 

## Instructions

We are going to be building a list of Pokemon displayed in cards from a mock data set. 

## Build the Pokemon container

To ensure clean code and easier readability, we are going to separate our components into containers and presentational components.

> A container is React component that does data fetching, handles state, and renders sub components. It handles all the logic and data manipulation then passes the data down to its presentational components as props. In future chapters, the container will handle all of the Redux state management as well.

> A presentational component is a "dumb" component that only receives data from its parent and should never change the data itself. They are be reusable and should only render the views. 

Create a `containers` folder under the `src` folder. In the `containers` folder create a `Pokemon.js` file. 

Import React and Component and create the Pokemon class to extend Component. 

```
import React, { Component } from 'react';
class Pokemon extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Pokemon;
```

Import the Pokemon container into `App.js` file below the other imports `import Pokemon from './containers/Pokemon';`

Create a `<Pokemon />` tag after the `<h1>` tag.

In the Pokemon container, insert the styles we will use to display a list of Pokemon in between the imports and class and apply to the `<div>` tag. 

```
const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    padding: '20px',
    width: '200px',
    height: '250px',
    border: '1px solid red',
    margin: '20px',
  },
  image: {
    width: '100px',
    height: '100px',
  }
};
```

```
<div style={styles.list}>
```

Let's create some Pokemon mock data for our container to display. 

Insert the code below under the `styles` variable. 

```
const mockData = [{
  name: 'Bulbasaur',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  abilities: 'Chlorophyll, Overgrow',
  type: 'Grass, Poison'
},
{
  name: 'Charmander',
  image: 'https://img.pokemondb.net/artwork/charmander.jpg',
  abilities: 'Solar Power, Blaze',
  type: 'Fire'
},
{
  name: 'Squirtle',
  image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
  abilities: 'Rain Dish, Torrent',
  type: 'Water'
},
{
  name: 'Pikachu',
  image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
  abilities: 'Lightning Rod, Static',
  type: 'Electric'
}]
```

We need to create a card for each element in the array to display to the user. Let's use the `map()` method to create a new array returning the a card for each Pokemon.

Insert the `map()` function within the `<div>` tags. 

```
  {mockData.map(pokemon => {
    return <div key={pokemon.name} style={styles}>
        <img src={pokemon.image} alt={pokemon.name}/>
        <p>{pokemon.name}</p>
        <p>{pokemon.abilities}</p>
        <p>{pokemon.type}</p>
      </div>
  })}
```

At this point, you should be able to see four cards with Pokemon information. Let's pull out the card element into its own presentational component. 

## Create the Card presentational component

Create a `components` folder under the `src` folder. In the `components` folder create a `Card.js` file. 

Import React and Component and create the Pokemon class to extend Component. 

```
import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Card;
```

Import the Card container into `src/containers/Pokemon.js` file below the other imports `import Card from '../components/Card';`

Replace

```
return <div key={pokemon.name} style={styles}>
    <img src={pokemon.image} alt={pokemon.name}/>
    <p>{pokemon.name}</p>
    <p>{pokemon.abilities}</p>
    <p>{pokemon.type}</p>
  </div>
```

with 

```
return <Card key={pokemon.name} pokemon={pokemon} styles={styles} />
```

The above code is passing the pokemon object and card styles as props to the Card component. This will allow us to use these variables in our Card component. 

> Props aka properties are parameters of a component. Props are how components talk to each other and how parent containers or components can pass down data to child components. 

We need to add the prop-types npm dependency to be able to use props in the component. If you're using CodeSanbox, click 'Add Dependency' under the Dependencies dropdown and enter `prop-types`. If you're doing this locally, do an `npm install prop-types --save`. 

Insert `import PropTypes from 'prop-types';` in the Card component below the other imports.

React has built-in typechecking on props for a component. Let's add that to our Card component. At the end of the class and before the export insert the code below: 

```
Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
}
```

We need to use these props in our component. Insert `const { styles, pokemon } = this.props;` in between `render()` and `return`. Now let's show our prop values to the user. Replace the `<div><div/>` tags with the following: 

```
<div key={pokemon.name} style={styles.card}>
  <img src={pokemon.image} alt={pokemon.name} style={styles.image}/>
  <p>{pokemon.name}</p>
  <p>{pokemon.abilities}</p>
  <p>{pokemon.type}</p>
</div>
```

You can see above how we're using data from the parent container but we're not manipulating it in any way thus why it's called a presentational component. 

## Final Result

You should now have a working application showing a list of Pokemons in a card view! In the next chapter, we will pull in real Pokemon data using the Pokemon API with GraphQL. 

