import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { styles, pokemon, addPokemon, showButton } = this.props;
    return (
      <div key={pokemon.name} style={styles.card}>
        <img src={pokemon.image} alt={pokemon.name} style={styles.image}/>
        <p>{pokemon.name}</p>
        <p>{pokemon.types.toString()}</p>
        {showButton && <button onClick={() => addPokemon(pokemon)}>Add Pokemon</button>}
      </div>
    );
  }
}

Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  addPokemon: PropTypes.func,
  showButton: PropTypes.bool.isRequired
}

export default Card;
