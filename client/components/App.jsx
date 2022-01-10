import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home';
import Walks from './Walks';

function App() {
  return (
    <>
      <div className='title'>
        <h1>Hikoi Around</h1>
      </div>

      <div className='main'>
    
        <Route path="/" exact component={Home} />
        <Route path="/10minsWalk" component={Walks} />
        {/* <Route path="/" component={Nav} />
        <Route path="/continent/:continentName/:code" component={Country} /> */}
      </div>
    </>
  )
}

export default App;
