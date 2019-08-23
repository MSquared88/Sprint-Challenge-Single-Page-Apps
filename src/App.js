import React from "react";
import { Route } from 'react-router-dom'

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'



export default function App() {
  return (
    <main>
      <TabNav />
      <Route exact path='/' component={Header}/>
      <Route exact path='/characters' component={CharacterList}/>
      <Route exact path='/locations' component={LocationsList}/>
      <Route exact path='/episodes' component={EpisodeList}/>
      {/* <WelcomePage/> */}
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
    </main>
  );
}
