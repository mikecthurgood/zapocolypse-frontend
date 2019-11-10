import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/Login'
import { Route, withRouter } from 'react-router-dom';
import API from './helpers/API';
import Skills from './components/Skills'
import Activities from './components/Activities'
import MySkills from './components/MySkills'
import CreateAccount from './components/CreateAccount'


class App extends React.Component {

  state = {
    user: "",
    userSkills: [],
    userActivities: [],
    userSkillZaps: []
  }

  logIn = (userData) => {
    this.setState({
      user: userData.username,
      userSkills: userData.userSkills,
      userActivities: userData.userActivities,
      userSkillZaps: userData.userSkillZaps
    })
    localStorage.setItem('token', userData.token)
  }

  logOut = () => {
    this.setState({ user: "" })
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      API.validates()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.logIn(data)
        })
        .catch(error => {
          console.log(error)
          localStorage.removeItem('token')
        })
    }
  }

  getSkills = () => {
    API.getAllSkills()
      .then(console.log)
  }

  getActivities = () => {
    API.getAllActivities()
      .then(console.log)
  }


  totalZaps = () => {
    return Object.values(this.state.userSkillZaps).reduce((a,b) => a+b , 0)
  }

  render() {
    const { logIn } = this
    return (
      <div className='main'>
        <NavBar user={this.state.user} logOut={this.logOut} totalZaps={this.totalZaps()} />
        {this.state.user ? <div className="logged-in-pages">
          <Route exact path="/" component={(routerProps) => <Home {...routerProps} logIn={logIn} />} />
          <Route path="/activities" component={(routerProps) => <Activities {...routerProps} getActivities={this.getActivities} user={this.state.user} />} />
          <Route path="/skills" component={(routerProps) => <Skills {...routerProps} getSkills={this.getSkills} user={this.state.user} />} />
          <Route path="/myskills" component={(routerProps) => <MySkills {...routerProps} mySkills={this.state.userSkills} user={this.state.user} />} />
          <Route path="/profile" component={Home} />
          <Route path="/my-account" component={Home} />
        </div> :
          <div className="login-pages">
            <Route path="/login" component={(routerProps) => <LoginForm {...routerProps} logIn={logIn} user={this.state.user} />} />
            <Route path="/create-account" component={(routerProps) => <CreateAccount {...routerProps} logIn={logIn} user={this.state.user} />} />
          </div>}
      </div>
    )
  }
}

export default withRouter(App);
