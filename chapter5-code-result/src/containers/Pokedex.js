import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../components/Card";

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

class Pokedex extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles.list}>
      {pokemon.map(pokemon => {
        return <Card key={pokemon.data.name} pokemon={pokemon.data} styles={styles} showButton={false} />
      })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps)(Pokedex);
