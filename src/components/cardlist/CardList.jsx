import React from 'react';
import Card from '../cards/card';
import './CardList.css'

const CardList =({robots}) => {
    return (
        <div className='card-list'>
           {robots.map((user, i) => {
            return (
            <Card 
            key={i} 
            id={user.id} 
            name={user.name} 
            email={user.email}
            />
        );
    })
    }
        </div>
    );
}

export default CardList