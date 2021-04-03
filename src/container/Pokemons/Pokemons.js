import React, { Component, Fragment } from 'react';
import axios from '../../axios';

import Spinner from '../../component/UI/Spinner/Spinner';
import PokemonCard from '../../component/Pokemon/PokemonCard/PokemonCard';
import Pagination from '../Pagination/Pagination';

class Pokemons extends Component {

    state = {
        pokemons: null
    }

    componentDidMount() {
        axios.get('/?limit=151')
        .then(res => {
            const newPokemons = res.data.results.map(p => {
                return {
                    name: p.name,
                    url: p.url,
                    pathname: this.props.location.pathname
                }
            });
            this.setState({
                pokemons: newPokemons
            })
        })
        .catch(error => console.log(error.message));
    }

    render() {
        let allPokemons = <Spinner />;
        if (this.state.pokemons) {
            allPokemons = (
                <Pagination
                    data={this.state.pokemons}
                    RenderComponent={PokemonCard}
                    title="Pokemons"
                    pageLimit={5}
                    dataLimit={12}
                />
            );
        }
        return (allPokemons);
    }
}

export default Pokemons;