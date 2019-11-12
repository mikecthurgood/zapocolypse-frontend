import React from 'react'
import { Card } from 'semantic-ui-react'
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