import React from 'react'
import { Card } from 'semantic-ui-react'
import API from '../helpers/API'
import ActivityCard from './ActivityCard'

class MyActivities extends React.Component {

    state = {
        activities: []
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')

        // API.getAllActivities()
        //     .then(data => {
        //         if (data.error) throw Error(data.error)

        //         this.setState({
        //             allActivities: data
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }


    render() {
        return (
            <div className="">
                <Card.Group>
                    {this.props.myActivities && this.props.myActivities.map(activity =>
                        <ActivityCard key={activity.id} {...activity}/>
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default MyActivities