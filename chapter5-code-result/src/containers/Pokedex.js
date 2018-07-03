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
