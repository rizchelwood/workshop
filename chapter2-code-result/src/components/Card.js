import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { styles, pokemon } = this.props;
    return (
      <div key={pokemon.name} style={styles.card}>
        <img src={pokemon.image} alt={pokemon.name} style={styles.image}/>
        <p>{pokemon.name}</p>
        <p>{pokemon.abilities}</p>
        <p>{pokemon.type}</p>
      </div>
    );
  }
}

Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
}

export default Card;
