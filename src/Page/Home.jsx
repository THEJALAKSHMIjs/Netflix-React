import React from 'react'
import {originals,actions,comedy} from '../urls'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import Navbar from '../Components/NavBar/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title = "Actions" isSmall/>
      <RowPost url={comedy} title = "Comedy Movies" isSmall/>
    </div>
  )
}

export default Home
