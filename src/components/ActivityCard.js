import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ActivityCard = ({ name, description, activity_type, skills }) => {
  return (
    <div className="skill-card">
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size='small'
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{activity_type}</span>
          </Card.Meta>
          <Card.Description>
            {/* {description} */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

          {skills.map(skill => <span><Icon name="smile" />{skill.name} </span>)}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ActivityCard;
