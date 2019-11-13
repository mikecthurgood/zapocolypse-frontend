import React from 'react'
import { Card } from 'semantic-ui-react'
import API from '../helpers/API'
import ActivityCard from './ActivityCard'
import { Link } from 'react-router-dom'

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
                <h1>My Activities</h1>
                <div className='custom-activity'><h3>Completed an activity we don't have listed? Create a <Link to='/profile'>Custom Activity</Link> in your profile.</h3></div>

                <Card.Group>
                    {this.state.allActivities.map(activity =>
                        // console.log(activity)
                        < ActivityCard key={activity.id} {...activity} />
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default Activities