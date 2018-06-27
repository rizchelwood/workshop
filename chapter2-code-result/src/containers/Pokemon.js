import React, { Component } from 'react';
import Card from '../components/Card';

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

class Pokemon extends Component {
  render() {
    return (
      <div style={styles.list}>
      {mockData.map(pokemon => {
        return <Card key={pokemon.name} pokemon={pokemon} styles={styles} />
      })}
      </div>
    );
  }
}

export default Pokemon;
