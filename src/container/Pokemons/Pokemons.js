import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Spinner from '../../component/UI/Spinner/Spinner';
import PokemonCard from '../../component/PokemonCard/PokemonCard';

class Pokemons extends Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/generation/1/')
        .then(res => {
            this.setState({
                pokemons: res.data.pokemon_species
            })
        })
        .catch(error => console.log(error.message));
    }

    render() {
        let allPokemons = <Spinner />;
        if (this.state.pokemons.length > 0) {
            allPokemons = (
                this.state.pokemons.map(p => {
                    return <PokemonCard key={p.name} path={this.props.location.pathname} name={p.name} />
                })
            );
        }

        const divStyle = {
            margin: '25px 100px 0px 100px',
            height: '530px',
            overflow: 'auto'
        };

        return (
            <Fragment>
                <div style={divStyle}>
                    {allPokemons}
                </div>
            </Fragment>
        );
    }
}

export default Pokemons;