import React from 'react';
//import './card-list.style.css';
import './card.style.css';
export const Card = props =>(
  <div className='card card-style'>
    <img className='card-image' alt="monster" src={'https://robohash.org/${props.monster.id}?set=set2'}/>
    <h1 className='card-header-weight'>{props.monster.name}</h1>
    <h2 className='subtitle'>{props.monster.email}</h2>
  </div>
);
