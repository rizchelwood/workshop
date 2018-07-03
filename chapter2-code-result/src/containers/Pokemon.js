import React, { Component } from 'react';
import Card from '../components/Card';

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
