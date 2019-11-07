import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route } from 'react-router-dom';



class App extends React.Component {

  state = {
    user: ""
  }

  render() {
    return (

      <>

        <NavBar user={this.state.user} />
        <div className="App">
          <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/create-team" component={Home} />
        <Route path="/my-team" component={Home} />
        <Route path="/teams" component={Home} />
      </>
    )
  }
}

export default App;
