import React from 'react';
import './card.css'
// import { Button } from 'react-bootstrap';

const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt="card"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;