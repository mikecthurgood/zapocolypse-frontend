import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const SkillCard = ({ name, description, skill_type }) => {
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
            <span className="date">{skill_type}</span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="smile" />
            skill
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SkillCard;
