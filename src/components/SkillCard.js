import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const SkillCard = ({ name, description, skill_type, image_url }) => {
  return (
    <div className="skill-card">
      <Card>
        <Image
          src={require(`../Assets/${image_url}`)}
          size='small'
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{skill_type}</span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="smile" />
          skill
        </Card.Content>
      </Card>
    </div>
  );
};

export default SkillCard;
