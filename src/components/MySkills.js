import React from 'react'
import { Card } from 'semantic-ui-react'
import SkillCard from './SkillCard'

class MySkills extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')
    }


    render() {

        return (
            <div className="">
                <br />
                <h1>My Skills</h1>
                <Card.Group>
                    {this.props.mySkills.map(skill =>
                        <SkillCard key={skill.id} {...skill} />
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default MySkills