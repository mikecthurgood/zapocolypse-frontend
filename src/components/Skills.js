import React from 'react'
import { Card } from 'semantic-ui-react'
import API from '../helpers/API'
import SkillCard from './SkillCard'

class Skills extends React.Component {

    state = {
        allSkills: []
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')

        API.getAllSkills()
            .then(data => {
                if (data.error) throw Error(data.error)

                this.setState({
                    allSkills: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div className="skill-cards">
                <br />
                <h1>Skills</h1>
                <h4>Master the skills. Survive the horde.</h4>
                <Card.Group>
                    {this.state.allSkills.map(skill =>
                        < SkillCard key={skill.id} {...skill} />
                    )}
                </Card.Group>
            </div>

        )
    }
}

export default Skills