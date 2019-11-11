import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const ActivityCard = ({ name, activity_type, skill_activities, id, setActivity }) => {
  return (
    <div className="skill-card">
      <Link to={`/activities/${id}`}>
        <Card >
          <Image
            src={require(`../Assets/${skill_activities[0].skill.image_url}`)}
            size='small'
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{activity_type}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            {skill_activities.map(item => <span key={item.skill.id} ><Icon name="smile" />{item.skill.name} </span>)}
          </Card.Content>
        </Card>
      </Link>
    </div >
  );
};

export default ActivityCard;
