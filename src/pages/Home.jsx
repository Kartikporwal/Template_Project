import React from 'react'
import CreativeAgency from '../components/CreativeAgency'
import Creative from '../components/Creative'
import Awesome from '../components/Awesome'
import WatchBanner from '../components/WatchBanner'
import Visit from '../components/Visit'
import MobileSection from '../components/MobileSection'

const Home = () => {
  return (
    <div>
       <CreativeAgency />
        <Creative />
        <Awesome />
        <WatchBanner />
        <MobileSection />
        <Visit />
    </div>
  )
}

export default Home
