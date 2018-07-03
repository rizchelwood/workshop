import React, { Component } from 'react';
import Pokemon from './containers/Pokemon';

const styles = {
  fontFamily: 'PokemonFireRedRegular',
  color: '#ff5c49',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <h1>My Pokemon App</h1>
        <Pokemon />
      </div>
    );
  }
}

export default App;
