import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const ActivityCard = ({ name, activity_type, skills, id, setActivity }) => {
  return (
    <div className="skill-card">
      <Link to={`/activities/${id}`}>
        <Card >
          <Image
            src={require(`../Assets/${skills[0].image_url}`)}
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
            {skills.map(skill => <span key={skill.id} ><Icon name="smile" />{skill.name} </span>)}
          </Card.Content>
        </Card>
      </Link>
    </div >
  );
};

export default ActivityCard;
