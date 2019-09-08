import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Clicker from './components/Clicker';
import Emoji from './components/Emoji';
import { Home, NotFound } from './components';
class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav id='navbarColor02'>
            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/clicker" className='btn btn-info'>Clicker</Link>
            <Link to="/emoji" className='btn btn-danger'>Emoji</Link>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clicker" component={Clicker} />
            <Route exact path="/emoji" component={Emoji} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    )
  }
};

export default App;
