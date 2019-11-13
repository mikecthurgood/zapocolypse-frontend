import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import API from '../helpers/API';


class NewActivityForm extends React.Component {

    state = {
        visible: false,
        skills: [],
        rawSkills: [],
        activity: {
            name: "",
            skills: [],
            description: ""
        }
    }

    componentDidMount() {
        API.getAllSkills()
            .then(data => {
                if (data.error) throw Error(data.error)

                this.setState({
                    skills: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    toggleVisible = () => {
        this.setState({ visible: !this.state.visible })
    }

    selectSkill = (e) => {
        const skill = e.target.innerText
        !this.state.rawSkills.includes(skill) && this.setState({
            rawSkills: [...this.state.rawSkills, skill],
            activity: { ...this.state.activity, skills: [...this.state.activity.skills, { name: skill, value: 0 }] }
        })
    }

    updateSkill = (e, skill) => {
        const targetSkill = this.state.activity.skills.find(skl => skl.name === skill)
        const skillLevel = e.target.innerText
        const skillsArray = this.state.activity.skills.filter(skl => skl.name !== skill)
        switch (skillLevel) {
            case 'Beginner':
                targetSkill.value = 2
                break;
            case 'Advanced':
                targetSkill.value = 3
                break;
            case 'Expert':
                targetSkill.value = 4
                break;
            case 'Master':
                targetSkill.value = 5
                break;
        }
        skillsArray.push(targetSkill)
        this.setState({
            activity: {
                ...this.state.activity, skills: skillsArray
            }
        })
        console.log(this.state.activity)
    }

    removeSkill = (skill) => {
        const newArray = this.state.rawSkills.filter(sk => sk !== skill)
        const newSkillsArrayInActivity = this.state.activity.skills.filter(sk => sk.name !== skill)
        this.setState({
            rawSkills: newArray, activity: {
                ...this.state.activity, skills: newSkillsArrayInActivity
            }
        })
    }

    addActivity = () => {
        // console.log(this.state.activity)

        API.newActivity({activity: this.state.activity})
        .then(data => {
            if (data.error) throw Error(data.error);

            this.setState({
                visible: false,
                activity: {
                    name: "",
                    skills: [],
                    description: ""
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    addActivityName = (e) => {
        this.setState({
            activity: {
                ...this.state.activity, name: e.target.value
            }
        })
    }

    addActivityDescription = (e) => {
        this.setState({
            activity: {
                ...this.state.activity, description: e.target.value
            }
        })
    }

    render() {
        const skills = this.state.skills

        return (
            <>
                {!this.state.visible ? <Button fluid color='blue' className='add-activity-button' onClick={this.toggleVisible} >Add New Activity</Button> :
                    <div className='show-form'>
                        <Button fluid color='red' className='add-activity-button' onClick={this.toggleVisible} >Close New Activity Form</Button>
                        <div className='activity-form'>
                            <Form className='activity-form-form'>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Activity Name' placeholder='Activity name' onChange={this.addActivityName} />
                                </Form.Group>
                                <br />
                                <Form.Select
                                    fluid
                                    label='Skills'
                                    onChange={this.selectSkill}
                                    options={
                                        skills.map(skill => (
                                            {
                                                key: skill.id,
                                                text: skill.name,
                                                value: skill.name,
                                            }
                                        ))
                                    }
                                    placeholder='Select Skills'
                                />
                                {this.state.rawSkills.map(skill =>
                                    <Form.Group key={skill}>
                                        <div>
                                            <strong>{skill}</strong> <button onClick={() => this.removeSkill(skill)}>X</button>
                                            <Form.Radio
                                                label='Beginner'
                                                // checked={this.state.selectedSkills[`${skill}`] === '2'}
                                                onChange={(e) => this.updateSkill(e, skill)}
                                            />
                                            <Form.Radio
                                                label='Advanced'
                                                // checked={value === '3'}
                                                onChange={(e) => this.updateSkill(e, skill)}
                                            />
                                            <Form.Radio
                                                label='Expert'
                                                // checked={value === '4'}
                                                onChange={(e) => this.updateSkill(e, skill)}
                                            />
                                            <Form.Radio
                                                label='Master'
                                                // checked={value === '5'}
                                                onChange={(e) => this.updateSkill(e, skill)}
                                            />
                                        </div>
                                    </Form.Group>

                                )}
                                <Form.TextArea height='40%' label='Description' placeholder='What did you do? What did you learn? How will this keep the horde at bay?' onChange={this.addActivityDescription} />
                                <br />
                                <Form.Button color='green' className='add-activity-button' onClick={this.addActivity} >Save New Activity</Form.Button>

                            </Form>

                        </div>

                    </div>
                }
            </>
        )
    }

}

export default NewActivityForm