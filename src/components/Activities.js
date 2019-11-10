import React from 'react'
import { Card } from 'semantic-ui-react'
import API from '../helpers/API'
import ActivityCard from './ActivityCard'

class Activities extends React.Component {

    state = {
        allActivities: []
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')

        API.getAllActivities()
            .then(data => {
                if (data.error) throw Error(data.error)

                this.setState({
                    allActivities: data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div className="activities">
                <Card.Group>
                    {this.state.allActivities.map(activity =>
                        <ActivityCard key={activity.id} {...activity} />
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default Activities