import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card, Icon, Image,  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

import EpisodeCard from './EpisodeCard'


export default function LocationsList() {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      
      axios.get('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10')
      .then(res => {
        setEpisodes(res.data)

      })
    }, []);
    return (
        <section className="character-list grid-view">
        <Card.Group itemsPerRow={2}>
          {episodes.map(episode =>(
            <EpisodeCard name={episode.name} airDate={episode.air_date} episode={episode.episode} /> 
          ))}
        </Card.Group>
        </section>

    )
}