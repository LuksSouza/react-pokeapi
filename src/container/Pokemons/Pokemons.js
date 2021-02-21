import React, { Component, Fragment } from 'react';
import axios from '../../axios';

import Spinner from '../../component/UI/Spinner/Spinner';
import PokemonCard from '../../component/Pokemon/PokemonCard/PokemonCard';

class Pokemons extends Component {

    state = {
        pokemons: null
    }

    componentDidMount() {
        axios.get('/?limit=151')
        .then(res => {
            this.setState({
                pokemons: res.data.results
            })
        })
        .catch(error => console.log(error.message));
    }

    render() {
        let allPokemons = <Spinner />;
        if (this.state.pokemons) {
            allPokemons = (
                this.state.pokemons.map(p => {
                    return <PokemonCard 
                                key={p.name} 
                                path={this.props.location.pathname} 
                                name={p.name}
                                url={p.url} />
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