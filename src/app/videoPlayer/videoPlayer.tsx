import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import style from './videoPlayer.module.css';


function VideoPlayer(props:any) {
    
    const [url, setUrl] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const mountedRef = useRef(true);
    
    useEffect(() => {
        return () => { 
          mountedRef.current = false
        }
      }, [])

    const fetchUrl = () => {
        if (!isFetching) {
            axios.get('/get_video_url')
            .then( res => {
                if (!mountedRef.current) return null
                console.log(res);
                setUrl(res.data);
                setIsFetching(false)
                setErrorMessage('');
            })
            .catch(err => {
                console.error(err.response.data);
                setIsFetching(false)
                setErrorMessage(err.response.data);
                }
            );
        setIsFetching(true);
        }
        
    }
    console.log(url);
    const video = (errorMessage === '') ? <video src= { url } className={style.player} controls = {true}/>:
     <div className = {style.error}> { errorMessage } </div>;
        
    return (
        <div>
            <div>
                {video}
                <button onClick = {fetchUrl}>
                    Get video
                </button>
            </div>
            <div>

            </div>
        </div>
  );
}



export default VideoPlayer;