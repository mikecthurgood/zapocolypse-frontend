import React from 'react'
import { Card } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'

class MyActivities extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')
    }


    render() {
        return (
            <div className="">
                <Card.Group>
                    {this.props.myActivities.map(activity =>
                        <ActivityCard key={activity.id} {...activity}/>
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default MyActivities