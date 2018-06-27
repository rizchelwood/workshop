import React, { Component } from "react";
import Card from "../components/Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { connect } from 'react-redux';
import { addPokemon } from '../actions';

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    padding: "20px",
    width: "200px",
    height: "250px",
    border: "1px solid red",
    margin: "20px"
  },
  image: {
    width: "100px",
    height: "100px"
  }
};

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.addPokemon = this.addPokemon.bind(this)
  }

  addPokemon(pokemon) {
    const { addPokemon } = this.props;
    addPokemon(pokemon);
  }

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
            if (error) return <p>Error: {error}</p>;
            return data.pokemons.map(pokemon => {
              return (
                <Card key={pokemon.name} pokemon={pokemon} styles={styles} addPokemon={this.addPokemon} />
              );
            });
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(addPokemon(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

