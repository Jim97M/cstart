import React, {useState, useEffect} from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
import ReactPlayer from "react-player";
import axios from 'axios';


const VideoList = () => {

  const [video, setVideo] = useState([]);

  const getVideoList = () => {
    axios.get('http://192.168.0.37:5000/api/v1/tutorial/alltutorials').then(res => {
      setVideo(res.data);
    })
  }

  useEffect(() => {
    getVideoList();
  })
  return (
    <div>
    {video.map((file) => (
         <ReactPlayer
         className='react-player fixed-bottom'
         url= {`${file.name}`}
         width='50%'
         height='50%'
         controls = {true}
        
         />
      ))}
    </div>
  )
}

export default VideoList
