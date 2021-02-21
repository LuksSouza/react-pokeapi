import React from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';

const pokemonLink = (props) => {
    const url2array = props.url.split('/');
    const id = url2array[url2array.length -2];

    return (
        <div className="PokemonCard">
            <div className="column">
                <div className="card">
                    <Link 
                        to={{
                                pathname: `${props.path}/${props.name}`,
                                search: `?id=${id}`
                            }}>{props.name}</Link>
                </div>
            </div>
        </div>
    );
}

export default pokemonLink;