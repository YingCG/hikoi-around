import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import NzBirds from './NzBirds';
import Rubbing from './Rubbing';
import Nature from './Nature';
import Walks from './Walks';
import Header from './Header';
import TenMinsWalk from './TenMinsWalk';


function App () {


    return (
    <>
      

      <div className='App'>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/10mins-walk" exact component={TenMinsWalk} />
          <Route path="/rubbing" exact component={Rubbing} />
          <Route path="/nature" exact component={Nature} />
          <Route path="/nature/nzbirds" exact component={NzBirds} />
        </Switch>
      </div>
    </>
  )
}


export default App;