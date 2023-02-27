import './VideoList.scss';
import React, {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import {FaVideo} from 'react-icons/fa';
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
         <div style={{marginLeft: 20, marginTop: 50, height: 500, width: 600, boxShadow: "0 0 3px 2px #cec7c759", padding: 20,  borderRadius: 20, flex: 1, flexDirection: 'column'}}>
         <ReactPlayer
         className='react-player fixed-bottom'
         url= {`${file.name}`}
         width='100%'
         height='100%'
         style={{marginTop: -50}}
         controls = {true}
         />
         <div style={{display:'flex', marginLeft: 10}}>
         <div style={{ marginTop: 10, height: 40, width: 130, boxShadow: "0 0 3px 2px #cec7c759", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
           <h5> {file.tutorial_name}  </h5> <FaVideo size={30} color='blue' style={{marginLeft: 5}}  />
          
         </div>
          <p style={{marginLeft: 50}}>
            {file.tutorial_description}
          </p>
         </div>
        </div>
      ))}
    </div>
  )
}

export default VideoList
