import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const SkillCard = ({ name, description, skill_type, image_url, singleSkill, id }) => {
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
          {!singleSkill && <Card.Header>{name}</Card.Header>}
          <Card.Meta>
            <span className="date">{skill_type}</span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        {!singleSkill && <Card.Content extra>
          <Link to={`/skills/${id}`}><Button fluid >See All Activities</Button></Link>
        </Card.Content>}

        <Card.Content extra>
          <Icon name="smile" />
          skill
        </Card.Content>
      </Card>
    </div>
  );
};

export default SkillCard;
