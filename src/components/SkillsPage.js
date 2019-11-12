import React from 'react'
import API from '../helpers/API'
import { Card } from 'semantic-ui-react'
import SkillCard from './SkillCard'
import ActivityCard from './ActivityCard'


class SkillsPage extends React.Component {

    state = {
        skill: {},
        activities: [],
        singleSkill: true
    }
    componentDidMount() {
        API.getSkill(this.props.match.params.id).then(data => this.setState({ skill: data.skill, activities: data.activities }))
    }

    render() {
        const skill = this.state.skill
        const activities = this.state.activities
        return (
            <div className='skill-page'>
                <div skill-page-header>
                    <h1>{skill.name}</h1>
                    {skill.name && < SkillCard key={skill.id} {...skill} singleSkill={this.state.singleSkill} />}
                </div>

                <h2>Activities</h2>
                <div className='skill-activities'>
                    {activities && activities.map(activity => < ActivityCard key={activity.id} {...activity} />)}
                </div>
            </div>
        )
    }
}

export default SkillsPage


