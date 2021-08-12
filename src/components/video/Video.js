import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import "./_video.scss"

const Video = () => {
    return (
      
      <div className="video">
        <div className="video__top">
          <img alt='' src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
          <span>05:43</span>
        </div>
        <div className="video__title">
          Create app in 5 minutes made by Chintu
        </div>
        <div className="video__details">
          <span>
            <AiFillEye/> 5m Views • 
          </span>
          <span> 5 days ago</span>
        </div>
        <div className="video__channel">
          <img src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw" alt=""/>
          <p>Chinar</p>
        </div>
      </div>
    )
}

export default Video
