import React from 'react'
import API from '../helpers/API'
import SkillCard from './SkillCard'
import ActivityCard from './ActivityCard'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { isEmpty } from '../helpers/utils'

class SkillsPage extends React.Component {

    state = {
        skill: {},
        activities: [],
        zaps: {},
        singleSkill: true
    }

    componentDidMount() {
        API.getSkill(this.props.match.params.id)
            .then(data => {
                this.setState(
                    {
                        skill: data.skill,
                        activities: data.activities,
                        zaps: data.skillZaps
                    })
            })
    }

    skillLevel = (val) => {
        if (val >= 0 && val < 5) {
            return 'Ignorant'
        } else if (val >= 5 && val < 20) {
            return 'Noob'
        } else if (val >= 20 && val < 100) {
            return 'Disciple'
        } else if (val >= 100 && val < 500) {
            return 'Adept'
        } else if (val >= 500 && val < 1000) {
            return 'Expert'
        } else if (val >= 1000) {
            return 'Master'
        }
    }

    showProgressBar = (zaps, skill) => {
        if (!isEmpty(zaps)) {
            return (
                <CircularProgressbarWithChildren value={zaps[skill.name]}>
                </CircularProgressbarWithChildren>
            )
        }
        return (
            <CircularProgressbarWithChildren value={0}>
                <div className='inside-progress-bar'>
                    <div className='prog-bar-elements'><strong>{0}⚡️</strong> </div><br />
                    <div className='prog-bar-elements'>{this.skillLevel(0)}</div>
                </div>
            </CircularProgressbarWithChildren>
        )
    }

    render() {
        const { skill, activities, zaps } = this.state
        return (
            <div className='skill-page'>
                <div skill-page-header>
                    <h1>{skill.name}</h1>
                    <div className='skill-header'>
                        <div>{skill.name && < SkillCard key={skill.id} {...skill} singleSkill={this.state.singleSkill} />}</div>
                        <div className='progress-chart'>{this.showProgressBar(zaps, skill)}</div>
                        <div>
                            <div className='skillpage-zaps'><strong>{zaps[skill.name]}⚡️</strong>
                                {this.skillLevel(zaps[skill.name])}</div>
                        </div>
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


