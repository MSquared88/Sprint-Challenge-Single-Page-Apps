import React from "react";
import { Card, Icon, Image,  } from "semantic-ui-react";

export default function LocationCard({ name, airDate, episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
      <Card.Meta>
          <span className='date'>Title: {episode}</span>
        </Card.Meta>
        <Card.Meta>
         <span className='date'>Air Date: {airDate} </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}
