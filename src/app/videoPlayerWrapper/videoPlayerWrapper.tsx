import React, { useState } from 'react';
import VideoPlayer from '../videoPlayer/videoPlayer'
import ProgressBar from '../progressBar/progressBar'
import style from './videoPlayerWrapper.module.css'

const player = <div>
                    <VideoPlayer/>
                    <ProgressBar/>
                </div>;

function VideoPlayerWrapper() {
    
    const [isShowing, setIsShowing] = useState(true)

    const showVideo = (evt: any, buttonName: string) => {
        setIsShowing(buttonName === 'show')
    };

    const possiblyVisiblePlayer = isShowing ? player: null;
    return (
        <div className="App">
            {possiblyVisiblePlayer}
            <button className = { style.player } onClick = { (evt:any) => showVideo(evt,'show') }>Show</button>
            <button className = { style.player } onClick = { (evt:any) => showVideo(evt,'hide') }>Hide</button>
        </div>
  );
}



export default VideoPlayerWrapper;
