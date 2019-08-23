import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import axios from 'axios'


import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      <Card>
        <CharacterCard/>
      </Card>

    </section>
  );
}
