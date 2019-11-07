import React from 'react'
import { Button } from 'semantic-ui-react'

const Skills = (props) => {


    return (
        <div className="skills-button">
            <Button onClick={props.getSkills}> Skills </Button>
        </div>
    )
}

export default Skills