import React from "react";
import { Card, Icon, Image,  } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Type: {type}</span>

        </Card.Meta>
        <Card.Meta>
         <span className='date'>Dimension: {dimension} </span>
        </Card.Meta>
        <Card.Description>
          {/* <span>{`${character.location.mame}  ${character.origin.name}`}</span> */}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {residents.length}
        </a>
      </Card.Content>
    </Card>
  )
}
