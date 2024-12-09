import React, { useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'

function Banner() {

  const [movie,setMovie] = useState()

  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data.results[0]);
        setMovie(response.data.results[Math. floor(Math. random()*20) + 1])
        
      })
  },[])
 

  return (


    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='row banner'>
       <div className=" ms-3 col-md-8 col-sm-4 content">
        <h4 className='title'>{ movie? movie.title:""}</h4>
        <div className="banner-buttons">
           <button className='button'>Play</button>
           <button className='button'>My List</button>
        </div>
        <h1 className='description '><b>{ movie? movie.overview.slice(0,150):""}</b></h1>
       </div>
       <div className='fade_bottom'>

       </div>
    </div>
  )
}

export default Banner
