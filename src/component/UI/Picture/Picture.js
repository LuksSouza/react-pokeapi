import React from 'react';

import './Picture.css';

const picture = (props) => {
    return (
        <div className='Picture'>
            <img src={props.src} alt={props.alt} />                    
            {props.shiny ? <p>{props.alt} shiny</p> : <p>{props.alt}</p>}
        </div>
    );
}

export default picture;