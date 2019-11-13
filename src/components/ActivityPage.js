import React from 'react'
import API from '../helpers/API'
import { Button } from 'semantic-ui-react'

class ActivityPage extends React.Component {

    state = {
        activity: {}
    }

    bookPlace = (activityId) => {
        API.bookActivity(activityId)
            .then(user => this.props.setUser(user))
    }

    componentDidMount() {
        API.getActivity(this.props.match.params.id).then(activity => this.setState({ activity }))
    }

    userActivityMap = () => this.props.userActivities ? this.props.userActivities.map(ua => ua.activity.id) : []

    render() {
        const { name, skills, description, location, cost, url, id } = this.state.activity
        const slug = url && url.includes('youtube') && url.split('=', 2)[1]
        // const userActivityIds = []
        // const userActivityMap = this.props.userActivities.map(ua => userActivityIds.push(ua.activity.id))
        return (
            <div className="activity-page">
                <h1>{name}</h1>
                <div className='skills-images'>
                    {skills && skills.map(skill =>
                        <div key={skill.id} ><img className="skill-image" src={require(`../Assets/${skill.image_url}`)} alt="" />
                            <div className='skill-description'>
                                <p>{skill.name}</p>
                            </div>
                        </div>)}
                </div>
                <div className="activity-details">
                    <p>Location: {location}</p>
                    <p>Cost: £{cost}</p>
                    <p>Description: {description}</p>
                    <p>Find out more: {url} </p>
                    {url && url.includes('youtube') ?
                        <div>
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${slug}`} frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <br />{!this.userActivityMap().includes(id) ? <Button onClick={() => this.bookPlace(id)} color='blue'>Finished?</Button> : <Button disabled >Watched</Button>}
                        </div>
                        :
                        <div>{!this.userActivityMap().includes(id) ? <Button onClick={() => this.bookPlace(id)} color='blue'>Book my place</Button> : <Button disabled >Booked</Button>}</div>
                    }
                </div>
            </div>
        )
    }
}

export default ActivityPage