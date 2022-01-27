import React from 'react'
import { NavLink } from 'react-router-dom'
import NzBirds from './NzBirds';

function Home() {
  return (
    <>
      <div className='main'>
      <NavLink exact activeClassName='active-link' to='/nature' >Nature</NavLink>

      </div>
    </>
  )
}

export default Home;
