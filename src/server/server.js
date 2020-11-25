const express = require('express');
const { send } = require('process');
const app = express()
const port = 8000

app.get('/get_video_url', (req, res) => {
    const ifIsError = Math.random() < 0.2;
    if (ifIsError) {
      res.status(500).send('You got screwed')
      return
    }
    setTimeout( () => {
      console.log('responding');
      res.send('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4');
    }, 30000);
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})