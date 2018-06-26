import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { styles, pokemon } = this.props;
    return (
      <div key={pokemon.name} style={styles}>
        <img src={pokemon.image} alt={pokemon.name} style={{width: '100px', height: '100px'}}/>
        <p>{pokemon.name}</p>
        <p>{pokemon.types.toString()}</p>
      </div>
    );
  }
}

Card.propTypes = {
  styles: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
}

export default Card;
