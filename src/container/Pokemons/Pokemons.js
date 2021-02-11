import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Spinner from '../../component/UI/Spinner/Spinner';

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
            console.log(this.state.pokemons);
        })
        .catch(error => console.log(error.message));
    }

    render() {
        console.log(this.state.pokemons);

        let allPokemons = <Spinner />;
        if (this.state.pokemons.length > 0) {
            allPokemons = (
                this.state.pokemons.map(p => {
                    return <p style={{ margin: '5px' }} key={p.name}>{p.name}</p>;
                })
            );
        }

        return (
            <Fragment>
                <p style={{textAlign: 'center'}}>Here will be showed all the original pokemons</p>
                {allPokemons}
            </Fragment>
        );
    }
}

export default Pokemons;