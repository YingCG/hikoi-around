import React from 'react'
import { Route } from 'react-router-dom'

function Rubbing() {
  return (
    <>
        <div className='main-container'>
        <div className='top-container'>
          <img className='home-image' src='/images/FrottagePicture.jpg' alt='walkingimage' />
          <div className='banner-contents'>
          </div>
        </div>
        <div className='page-contents'>
          <h2>Experience the relationship between people and places</h2>
          <p>To weave art into your everday life help you to keep the habit of taking 10minstues walk dairy. Living a flife with experience of the relationship between people and places with just 10mins a day!  
            Hikoi around your neighbourhood, explore surfaces and textures. Make print by rubbing what you find in the spacexs and pla ces of your surrounding environment.  </p>
        </div>

        

          <div className='twoCol'>
                <div className='twoCol-card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Rub Urban</h3>
                </div>
                <div className='twoCol-card'>
                    <img className='session-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
                    <h3>Frottage Art</h3>
                </div>

            </div>
        <div className='bottom-banner'>
          </div>
        </div>
    </>
  )
}

export default Rubbing;
