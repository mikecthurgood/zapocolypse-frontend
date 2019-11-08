import React from 'react'
import './forms.css';

import { Form, Segment, Button } from 'semantic-ui-react'
import API from '../helpers/API'

class CreateAccount extends React.Component {

    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        if (this.props.user) window.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        const { logIn, history } = this.props
        API.signIn(username, password)
            .then(json => {
                if (json.error) throw Error(json.error)
                logIn(json)
                history.push('/')
            }).catch(error => console.log(error))

    }

    render() {
        return (
            <div className="login-page">
                <h1>Create An Account</h1>
                <h2>Prepare For The Apocolypse.</h2>
                <div className="login-form">
                    <Segment inverted>
                        <Form inverted onChange={this.handleChange} onSubmit={this.handleSubmit} >
                            <Form.Input label='Username' placeholder='Username...' name="username" required={true} />
                            <Form.Input label='Age (optional)' placeholder='Age...' name="Age" />
                            <Form.Input label='Height (optional)' placeholder='Height...' name="Height" />
                            <br />
                            <Form.Input label='Password' type='password' placeholder='Password...' name="password" required={true} />
                            <Form.Input label='Password Confirmation' type='password confirmation' placeholder='Confirm Password...' name="password" required={true} />
                            <Button type='submit'>Create Account</Button>
                        </Form>
                    </Segment>
                </div>
            </div >
        )
    }

}

export default CreateAccount