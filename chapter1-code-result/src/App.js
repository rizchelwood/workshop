import React, { Component } from 'react';

const appStyle = {
  color: 'red',
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
