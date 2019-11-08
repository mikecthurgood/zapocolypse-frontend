import React from 'react'
import { Button } from 'semantic-ui-react'

class Skills extends React.Component {

    componentDidMount() {
        if (!this.props.user) this.props.history.push('/login')
    }


    render() {
        return (
            <div className="skills-button">
                <Button onClick={this.props.getSkills}> Skills </Button>
            </div>
        )
    }
}

export default Skills