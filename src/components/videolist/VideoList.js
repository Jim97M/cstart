import './VideoList.scss';
import React, {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import {FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import axios from 'axios';
import Button from '../buttons/Button';


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
         <div style={{marginLeft: 20, marginTop: 50, height: 500, width: 1400, boxShadow: "0 0 3px 2px #cec7c759", padding: 20,  borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
        <div style={{width: 3200}}>
         <ReactPlayer
         className='react-player fixed-bottom'
         url= {`${file.name}`}
         width='100%'
         height='100%'
         style={{marginTop: -50}}
         controls = {true}
         />
         </div>
         <div style={{display:'flex', marginLeft: 10, flexDirection: 'column'}}>
         <h5 style={{marginLeft: 200}}> {file.tutorial_name}  </h5> 
          
         {/* <div style={{ marginTop: 10, height: 40, width: 130, boxShadow: "0 0 3px 2px #cec7c759", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        
         </div> */}
          <p style={{marginLeft: 50, fontWeight: 'revert-layer', fontSize: 20}}>
            {file.tutorial_description}
          </p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
         <Button disabled> Activate</Button>
         <div style={{marginTop: 25, display: 'flex', flexDirection: 'row'}}>
         <div
           style={{ height: 55, width: 55, boxShadow: "0 0 3px 2px #cec7c759",  borderRadius: 20, justifyContent: 'center', display: 'flex', alignItems: 'center'}}
           
          >
          <FaThumbsDown
              size={30}
          />
        </div>
        <div
          style={{ marginLeft: 20, height: 55, width: 55, boxShadow: "0 0 3px 2px #cec7c759",  borderRadius: 20, justifyContent: 'center', display: 'flex', alignItems: 'center'}}
          >
          <FaThumbsUp
           size={30}
            />
        </div>
        </div>
         </div>
         </div>
        </div>
      ))}
    </div>
  )
}

export default VideoList
