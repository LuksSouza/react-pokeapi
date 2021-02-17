import React from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';

const pokemonLink = (props) => {
    return (
        <div className="PokemonCard">
            <div className="column">
                <div className="card">
                    <Link to={`${props.path}/${props.name}`}>{props.name}</Link>
                </div>
            </div>
        </div>
    );
}

export default pokemonLink;