import React from 'react'
import './forms.css';

import { Form, Segment, Button } from 'semantic-ui-react'
import API from '../helpers/API'

class CreateAccount extends React.Component {

    state = {
        username: "",
        password: "",
        passwordConf: "",
        passwordMessage: "",
        location: "",
        age: "",
        height: "",
        occupation: "",
        values: {
            locations: ['City', 'Town', 'Village', 'Rural'],
            occupations: ['Doctor', 'Mechanic']
        }

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
        const { username, password, passwordConf, location, age, height, occupation } = this.state
        const { logIn, history } = this.props
        const newUser = {
            username, password, passwordConf, location, age, height, occupation,
        }

        if (password !== passwordConf) return

        API.createUser(newUser)
            .then(json => {
                if (json.error) throw Error(json.error)
                logIn(json)
                history.push('/')
                console.log(json)
            }).catch(error => console.log(error))

    }

    handleLocationRadioButton = e => {
        this.setState({ location: e.target.value })
    }

    checkPasswordsMatch = () => {
        if (this.state.password !== this.state.passwordConf) this.setState({ passwordMessage: "Passwords do not match" })
        else this.setState({ passwordMessage: '✅ Passwords Match' })
    }

    render() {
        return (
            <div className="login-page">
                <h1>Create An Account</h1>
                <h2>Prepare For The Apocolypse.</h2>
                <div className="login-form">
                    <Segment inverted>
                        <Form inverted onChange={this.handleChange} onSubmit={this.handleSubmit} >
                            <Form.Input label='Username' placeholder='Username...' name="username" required={true} value={this.state.username} />
                            <Form.Input label='Age (optional)' placeholder='Age...' name="age" value={this.state.age} />
                            <Form.Input label='Height (optional)' placeholder='Height...' name="height" value={this.state.height} />
                            <Form.Input label='Occupation (optional)' placeholder='Occupation...' name="occupation" value={this.state.occupation} />
                            <Form.Field label='Living in a:'></Form.Field>
                            <Form.Group>
                                {this.state.values.locations.map(location =>
                                    <Form.Input
                                        key={location}
                                        onClick={this.handleLocationRadioButton}
                                        type='radio'
                                        name='location'
                                        label={location}
                                        value={location}
                                        checked={this.state.location === location}
                                        className="radio"
                                    />
                                )}
                            </Form.Group>
                            <Form.Input label='Password' type='password' placeholder='Password...' name="password" required={true} value={this.state.password} />
                            <Form.Input label='Password Confirmation' type='password' placeholder='Confirm Password...' name="passwordConf" required={true} onKeyUp={this.checkPasswordsMatch} />
                            <div><p>{this.state.passwordMessage}</p></div>
                            <Button type='submit'>Create Account</Button>
                        </Form>
                    </Segment>
                </div>
            </div >
        )
    }

}

export default CreateAccount