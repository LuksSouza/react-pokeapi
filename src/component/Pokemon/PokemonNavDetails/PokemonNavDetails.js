import React from 'react';
import { Link } from 'react-router-dom';

import './PokemonNavDetails.css';

const pokemonNavDetails = (props) => {
    return (
        <div className='PokemonNavDetails'>
            <ul>
                {
                    props.itemsList.map(i => (
                        <li><Link to={i.path}>{i.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default pokemonNavDetails;