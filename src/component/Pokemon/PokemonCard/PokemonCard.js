import React from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';

const pokemonLink = (props) => {
    const { name, pathname, url } = props.data;
    const url2array = url.split('/');
    const id = url2array[url2array.length -2];

    return (
        <div className="PokemonCard">
            <div className="column">
                <div className="card">
                    <Link 
                        to={{
                                pathname: `${pathname}/${name}`,
                                search: `?id=${id}`
                            }}>{name}</Link>
                </div>
            </div>
        </div>
    );
}

export default pokemonLink;