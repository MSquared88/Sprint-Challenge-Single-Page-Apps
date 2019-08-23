import React from "react";

 import { Card, Icon, Image,  } from "semantic-ui-react";
 import 'semantic-ui-css/semantic.min.css';

export default function CharacterCard(props) {
  return (
  <>
    <Image src= {props.imgUrl}/>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Episodes
          </a>
        </Card.Content>
  </>
  )
}
