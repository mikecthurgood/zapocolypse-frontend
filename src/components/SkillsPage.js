import React from 'react'
import API from '../helpers/API'
import { Card } from 'semantic-ui-react'
import SkillCard from './SkillCard'
import ActivityCard from './ActivityCard'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//checks for empty object
Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

class SkillsPage extends React.Component {

    state = {
        skill: {},
        activities: [],
        zaps: {},
        singleSkill: true
    }
    
    componentDidMount() {
        API.getSkill(this.props.match.params.id)
        .then(data => { this.setState(
            { 
                skill: data.skill, 
                activities: data.activities, 
                zaps: data.skillZaps
            })})
    }

    showProgressBar = (zaps, skill) => {
        if (!zaps.isEmpty()) return <CircularProgressbar value={zaps[skill.id]} text={`${zaps[skill.id]}⚡️`} />

        return <CircularProgressbar value={0} text={'0⚡️'} />
    }

    render() {
        const {skill, activities, zaps} = this.state
        return (
            <div className='skill-page'>
                <div skill-page-header>
                    <h1>{skill.name}</h1>
                    <div className='skill-header'>
                        <div>{skill.name && < SkillCard key={skill.id} {...skill} singleSkill={this.state.singleSkill} />}</div>
                        <div className='progress-chart'>{this.showProgressBar(zaps, skill)}</div>
                    </div>
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


