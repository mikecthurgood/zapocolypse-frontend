import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/Login'
import { Route } from 'react-router-dom';
import API from './helpers/API';
import Skills from './components/Skills'



class App extends React.Component {

  state = {
    user: ""
  }

  logIn = (userData) => {
    this.setState({ user: userData.username })
    localStorage.setItem('token', userData.token)
  }

  logOut = () => {
    this.setState({ user: "" })
    localStorage.removeItem('token')
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token)
      API.validates()
        .then(data => this.logIn(data))
        .catch(console.log)
  }

  getSkills = () => {
    API.getAllSkills()
      .then(console.log)
  }


  render() {
    const { logIn } = this
    return (
      <>
        <NavBar user={this.state.user} logOut={this.logOut} />
        <div className="main">
          {/* <Header /> */}
          <Route exact path="/" component={(routerProps) => <Home {...routerProps} logIn={logIn} />} />
          <Route path="/activities" component={Home} />
          <Route path="/skills" component={(routerProps) => <Skills {...routerProps} getSkills={this.getSkills} />} />
          <Route path="/profile" component={Home} />
          <Route path="/my-account" component={Home} />
          <Route path="/login" component={(routerProps) => <LoginForm {...routerProps} logIn={logIn} />} />
          <Route path="/create-account" component={Home} />
        </div>
      </>
    )
  }
}

export default App;
