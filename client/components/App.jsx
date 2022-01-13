import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import NzBirds from './NzBirds';
import Places from './Places';
import Walks from './Walks';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {page: "about"}
  }

  changePage(newPage) {
    this.setState( {page: newPage })
  }

  renderPage() {
    if (this.state.page === 'about') return <About />
    else if (this.state.page === 'birds') return <NzBirds />
    else if (this.state.page === '') return <Walks />
    else if (this.state.page === '') return <Places />

  }

  render() {
    return (
    <>
      <div className='title'>
        <h1>Hikoi Around</h1>
      </div>

      <div className='main'>
      <nav>
        <a onClick={() => this.changePage("about")}>About</a>
        <a onClick={() => this.changePage("birds")}>Birds</a>
        <a onClick={() => this.changePage("walks")}>Walks</a>
        <a onClick={() => this.changePage("places")}>Places</a>
      </nav>
      {this.renderPage()}
    
        {/* <Route path="/" exact component={Home} />
        <Route path="/10minsWalk" component={Walks} /> */}
        {/* <Route path="/" component={Nav} />
        <Route path="/continent/:continentName/:code" component={Country} /> */}
      </div>
    </>
  )
}
}

export default App;
