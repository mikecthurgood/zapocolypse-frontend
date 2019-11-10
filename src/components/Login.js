import React from 'react'
import './forms.css';
import { Form, Segment, Button } from 'semantic-ui-react'
import API from '../helpers/API'

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        if (localStorage.getItem('token')) this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        const { logIn } = this.props
        API.signIn(username, password)
            .then(json => {
                if (json.error) throw Error(json.error)
                logIn(json)
                if (localStorage.getItem('token')) this.props.history.push('/')
            }).catch(error => console.log(error))

    }

    render() {
        return (
            <div className="login-page">
                <h1>Sign In To Prepare For The Zombie Apocolypse</h1>
                <div className="login-form">
                    <Segment inverted>
                        <Form inverted onChange={this.handleChange} onSubmit={this.handleSubmit} >
                            <Form.Input label='Username' placeholder='Username...' name="username" />
                            <Form.Input label='Password' type='password' placeholder='Password...' name="password" />
                            <Button type='submit'>Login</Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        )
    }

}

export default LoginForm