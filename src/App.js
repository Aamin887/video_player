import { useState } from 'react';
import './App.css';


const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

// ** the menu using radio button when selected should pass its value to the state variable to be used in 
// selecting the intended video to play

const videoNames = Object.keys(videos)

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videos.spider)

  const handleSubmit = function(evt){
    const video = evt.target.value
    let selectVideo = videos[video]
    setSelectedVideo(selectVideo)
  }

  return (
    <div className="App">
      <div className='content'>
        <form onClick={handleSubmit}>
            {
              videoNames.map((name, idx) => (
                <label key={idx} htmlFor={name + idx}>
                  <input type='radio' name='src' value={name} key={idx} id={name+idx}/>
                  {name}
                </label>
              ))
            }
        </form>

        <div className='video-container'>
          <video src={selectedVideo} muted autoPlay loop/>
        </div>
      </div>
    </div>
  );
}

export default App;
