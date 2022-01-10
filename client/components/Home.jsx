import React from 'react'
import { Route } from 'react-router-dom'
import NzBirds from './NzBirds';

function Home() {
  return (
    <>
      <div className='main'>
      <NzBirds/>
      </div>
    </>
  )
}

export default Home;
