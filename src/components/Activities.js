import React from 'react'
import { Card, Form } from 'semantic-ui-react'
import API from '../helpers/API'
import ActivityCard from './ActivityCard'
import { Link } from 'react-router-dom'
import FilterTypes from '../helpers/ActivitiesFilterTypes'

class Activities extends React.Component {

    state = {
        allActivities: [],
        filterType: 'All'
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
        const options = FilterTypes.filters().map(filter => (
            {
                key: filter,
                text: filter,
                value: filter,
            }
        ))
        
        return (
            <div><br /><br />
                
               
                <h1>Activities</h1>
                
                <div className='custom-activity'><h3>Completed an activity we don't have listed? Create a <Link to='/profile'>Custom Activity</Link> in your profile.</h3></div>

                <h4>Filter Activities</h4>
                <Form className='activities-filter'>
                    <Form.Select
                        fluid
                        onChange={console.log('cool')}
                        options={options}
                    />
                  
                </Form>

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