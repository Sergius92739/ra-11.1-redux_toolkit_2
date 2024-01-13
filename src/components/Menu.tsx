import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='menu'>
      <NavLink className={'menu__item'} to={'/'}>Поиск</NavLink>
      <NavLink className={'menu__item'} to={'/favourites'}>Избранное</NavLink>
    </nav>
  )
}

export default Menu