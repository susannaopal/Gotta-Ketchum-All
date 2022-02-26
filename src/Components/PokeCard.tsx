import React from 'react';
import '../CSS/PokeCard.css';
import { Link } from 'react-router-dom';

const PokeCard = ({name, sprite, id}) => {
  return(
    <Link to={`${Number(id) - 1}`} className='poke-card' >
      <img className='card-sprite' src={sprite} alt='pokemon character'/>
      <p className='pokemon-name'>{name}</p>
    </Link>
  )
}

export default PokeCard;