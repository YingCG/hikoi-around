import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Art from './Art';
import Home from './Home';
import NzBirds from './NzBirds';
import Urban from './Urban';
import Nature from './Nature';
import Walks from './Walks';
import Header from './Header';


function App () {


    return (
    <>
      

      <div className='App'>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/art" exact component={Art} />
          <Route path="/urban" exact component={Urban} />
          <Route path="/nature" exact component={Nature} />
          <Route path="/nature/nzbirds" exact component={NzBirds} />
          <Route path="/walks" exact component={Walks} />
        </Switch>
      </div>
    </>
  )
}


export default App;