import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../../Constants/constants'

function RowPost(props) {
  
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')


  useEffect(()=>{
     axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
     }).catch(err=>{
      // alert('network error')
     })
  },[])
  // dependency-empty array-each refresh

  const opts = {
    height: '390',
    width: '2000',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
     console.log(id);
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          //  console.log(response.data);
          if(response.data.results.length !==0){
            setUrlId(response.data.results[0])      
          }else{
            console.log('array empty');
          }
     })
  }

  return (
    <div className=' row rowP'>
      <h2>{props.title}</h2>
      <div className='posters'>
       
        { movies ?  movies.map((item)=>(
           <img onClick={()=>handleMovie(item.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+item.backdrop_path}`} alt="poster" /> 
        )): ""}

        
       
      </div>
      { urlId && <YouTube opt={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
