import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import API from '../helpers/API'
import MyActivityCard from './MyActivityCard'

class MyActivities extends React.Component {

    state = {
        activities: []
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')
    }


    render() {
        return (
            <div className="">
                <h1>My Activities</h1>
                <div className='custom-activity'><h3>Completed an activity we don't have listed? Create a <Link to='/profile'>Custom Activity</Link> in your profile.</h3></div>
                <Card.Group>
                    {this.props.myActivities.map(item =>
                        <MyActivityCard key={item.activity.id} {...item.activity} />
                    )}
                </Card.Group>
            </div>
        )
    }
}

export default MyActivities