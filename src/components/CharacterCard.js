import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Card, Icon, Image,  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export default function CharacterCard(props) {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get(`https://rickandmortyapi.com/api/character/${props.character.id}`)
    .then(res => {
      setCharacter(res.data)
    })
  }, []);
  return (
    <Card>
      <Image src= {character.image}/>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Species: {character.species}</span>
          </Card.Meta>
          <Card.Meta>
            <span className='date'>Status: {character.status}</span>
          </Card.Meta>
          <Card.Description>
            {
            (!character.name)
            ?  <span>loading name</span>
            :<span> {character.location.name}</span>}
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <a>
            <Icon name='tv' />
            {(!character.episode)
            ? <span>loading episodes</span>
            :<span> Episodes: {character.episode.length}</span>}
          </a>
      </Card.Content>
    </Card>
  )
}
