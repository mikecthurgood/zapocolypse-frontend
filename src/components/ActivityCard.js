import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

// const courseDuration (minutes) => {
//   if (minutes < 60) ${minutes} minutes
//   if (minutes > 59 )
// }

const ActivityCard = ({ name, activity_type, skills, id, duration }) => {


  return (
    <div className="skill-card">
      <Link to={`/activities/${id}`}>
        <Card >
          {skills && <Image
            src={require(`../Assets/${skills[0].image_url}`)}
            size='small'
            wrapped
            ui={false}
          />}
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <p className="date">{activity_type}</p>
              {skills && <p className="date">Duration: {duration / 60} {duration / 60 > 1 ? 'hours' : 'hour'}</p>}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            {skills ? skills.map(skill => <span key={skill.id} ><Icon name="smile" />{skill.name} </span>) : <p className="date"><strong>Duration:</strong> {duration / 60} {duration / 60 > 1 ? 'hours' : 'hour'}</p>}
          </Card.Content>
        </Card>
      </Link>
    </div >
  );
};

export default ActivityCard;
