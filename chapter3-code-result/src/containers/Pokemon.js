import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
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
  },
  button: {
    color: "#00b6cb",
    padding: "5px",
    border: "1px solid #00b6cb",
    background: "#fff",
  }
};

class Pokemon extends Component {
  render() {
    return (
      <div style={styles.list}>
        <Query
          query={gql`
          {
            pokemons(first: 100) {
              number
              name
              image
              types
            }
          }
        `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Your Pokemon are loading...</p>;
          if (error) return <p>Error</p>;
          return data.pokemons.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} styles={styles} />
          });
        }}
      </Query>
    </div>
    );
  }
}

export default Pokemon;
