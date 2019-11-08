import React from 'react'
import { Button } from 'semantic-ui-react'

class MySkills extends React.Component {

    componentDidMount() {
        if (!this.props.user) this.props.history.push('/login')
    }


    render() {
        return (
            <div className="skills-button">
                <Button onClick={this.props.getMySkills}> My Skills </Button>
            </div>
        )
    }
}

export default MySkills