import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card, Icon, Image,  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

import LocationCard from './LocationCard'


export default function LocationsList() {
    const [locations, setLocations] = useState([])
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      
      axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setLocations(res.data.results)
      })
    }, []);
    return (
        <section className="character-list grid-view">
        <Card.Group itemsPerRow={2}>
          {locations.map(location =>(
            <LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents}/> 
          ))}
        </Card.Group>
        </section>

    )
}
