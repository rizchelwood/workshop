import React, { Component } from 'react';

const appStyle = {
  fontFamily: 'PokemonFireRedRegular',
  color: '#ff5c49',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <h1>My Pokemon App</h1>
      </div>
    );
  }
}

export default App;
