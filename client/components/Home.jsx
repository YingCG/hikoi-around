import React from 'react'
import { NavLink } from 'react-router-dom'
import NzBirds from './NzBirds';

function Home() {
  return (
    <>
      <div className='main-container'>
        {/* <NavLink exact activeClassName='active-link' to='/nature' >Nature</NavLink> */}
        <div className='top-container'>
          <div className='home-image'>
            <img className='home-image' src='/images/photo-1487956382158-bb926046304a.jpg' alt='walkingimage' />
          </div>
          <h1>10-Minute Walks</h1>
          <h3>Taking a few 10-minutes walks spread throughout the day every day makes a difference. Not only it is good for your physical health, it also positively impacts your mood and mental health.</h3>
          <button className='banner-btn'>View More</button>
        </div>

        <div className='page-contents'>
          <h2>Make Creative Part of your Everday Life</h2>
          <p>In this buss of productivity, what happens to the creative mind and body? </p>
          <p>Ten minutes isn't a huge time commitment (that's the point!), but those minutes really add up over the course of the day. The physical health benefits of 30 minutes of walking each day are numerous! We get some fresh air, increased Vitamin D, regular walk also help to maintain bone density.</p>
          <ul>
            <li>Clearer, Sharper, Calmer Mind</li>
            <li>Reduce risk of obesity</li>
            <li>Aware of yourself &amp; surrounding</li>
            <li>Make Art</li>
          </ul>
        </div>
        </div>
          <div className='bottom-banner'>
            <h3>Treat yourself for 10 minutes</h3>
            <p>Set an alarm, put it in your daily routine. If you are struggling, get our rubbing journal to help!</p>

            <button className='banner-btn'>Join Us!</button>
          </div>

    </>
  )}

export default Home;
