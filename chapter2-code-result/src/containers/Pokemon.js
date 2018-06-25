import React, { Component } from 'react';
import Card from '../components/Card';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardStyle = {
  padding: '20px',
  width: '200px',
  height: '250px',
  border: '1px solid red',
  margin: '20px',
};

const mockData = [{
  name: 'Bulbasaur',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  abilities: 'Chlorophyll, Overgrow',
  type: 'Grass, Poison'
},
{
  name: 'Charmander',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  abilities: 'Solar Power, Blaze',
  type: 'Fire'
},
{
  name: 'Squirtle',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  abilities: 'Rain Dish, Torrent',
  type: 'Water'
},
{
  name: 'Pikachu',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  abilities: 'Lightning Rod, Static',
  type: 'Electric'
}]

class Pokemon extends Component {
  render() {
    return (
      <div style={listStyle}>
      {mockData.map(pokemon => {
        return <Card key={pokemon.name} pokemon={pokemon} styles={cardStyle} />
      })}
      </div>
    );
  }
}

export default Pokemon;
