import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from '../../../axios';

import PokemonNavDetails from '../../../component/Pokemon/PokemonNavDetails/PokemonNavDetails';
import Spinner from '../../../component/UI/Spinner/Spinner';
import Picture from '../../../component/UI/Picture/Picture';

class PokemonDetails extends Component {

    state = {
        id: null,
        name: null,
        moves: [],
        species: [],
        sprites: [],
        stats: [],
        types: []
    }

    componentDidMount() {
        const id = new URLSearchParams(this.props.location.search).get('id');
        axios.get(`/${id}`)
        .then(resp => {
            this.setState({
                id: resp.data.id,
                name: resp.data.name,
                moves: resp.data.moves,
                species: resp.data.species,
                sprites: resp.data.sprites,
                stats: resp.data.stats,
                types: resp.data.types
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        let pokemon = <Spinner />;
        let pokemonNavDetails = null;
        let pokemonDetails = null;

        if (this.state.name) {
            pokemon = (
                <div style={{ padding: '20px' }}>
                    <Picture src={this.state.sprites['front_default']} 
                             alt={this.state.name} 
                             align= 'right' />
                    <Picture src={this.state.sprites['front_shiny']} 
                             alt={this.state.name}
                             align= 'left'
                             shiny />
                </div>
            );
            
            const uri = this.props.match.url;
            const itemsList = [
                {
                    path: `${uri}/types`,
                    name: 'Types'
                },
                {
                    path: `${uri}/moves`,
                    name: 'Moves'
                },
                {
                    path: `${uri}/stats`,
                    name: 'Stats'
                },
                {
                    path: `${uri}/species`,
                    name: 'Species'
                }
            ];

            pokemonNavDetails = <PokemonNavDetails itemsList={itemsList} />;
            pokemonDetails = (
                <Switch>
                    {itemsList.map(i => (
                        <Route path={i.path} component={m => <p>Here will appear the {i.name}...</p>} />    
                    ))}
                </Switch>
            );
        }

        return (
            <Fragment>
                {pokemon}
                {pokemonNavDetails}
                {pokemonDetails}
            </Fragment>
        )            
    }

}

export default PokemonDetails;