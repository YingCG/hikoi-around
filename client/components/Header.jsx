import React from 'react';
import {NavLink} from 'react-router-dom'

function Header () {
    return (
        <>
        <div className='header'>
        <h1>Hikoi Around</h1>
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/' >Home</NavLink>
        <NavLink exact activeClassName='active-link' to='/10mins-walk' >10 Mins Walk</NavLink>
        <NavLink exact activeClassName='active-link' to='/rubbing' >Frottage Art</NavLink>
        {/* <NavLink exact activeClassName='active-link' to='/shop' >Shop</NavLink> */}


        {/* <NavLink exact activeClassName='active-link' to='/art_journal' >Art/Journal</NavLink> */}
      </nav>
      </div>
        </>
    )
}

export default Header