import React from 'react'
import API from '../helpers/API'

class ActivityPage extends React.Component {

    state = {
        activity: {}
    }

    componentDidMount() {
        API.getActivity(this.props.match.params.id).then(activity => this.setState({ activity }))
    }

    render() {
        const { name, skills, description, location, cost, url } = this.state.activity
        const slug = url && url.includes('youtube') && url.split('=', 2)[1]
        return (
            <div className="activity-page">
                <h1>{name}</h1>
                <div className='skills-images'>
                    {skills && skills.map(skill =>
                        <div key={skill.id} className="skill-image"><img className="skill-image" src={require(`../Assets/${skill.image_url}`)} alt="" />
                            <p>{skill.name}</p>
                            <p>{skill.description}</p></div>)}
                </div>
                <div className="activity-details">
                    <p>Location: {location}</p>
                    <p>Cost: {cost}</p>
                    <p>Description: {description}</p>
                    <p>Find out more: {url} </p>
                    {url && url.includes('youtube') &&
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${slug}`} frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                </div>
            </div>
        )
    }
}

export default ActivityPage