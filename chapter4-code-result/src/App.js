import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokemon from './containers/Pokemon';
import Pokedex from './containers/Pokedex';
import Tabs from './components/Tabs';

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/graphql"
});


const appStyle = {
  fontFamily: 'PokemonFireRedRegular',
  color: '#ff5c49',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={appStyle}>
          <h1>My Pokemon App</h1>
          <Router>
            <div>
              <Tabs/>
              <Route exact={true} path="/" component={Pokemon} />
              <Route path="/pokedex" component={Pokedex} />
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
