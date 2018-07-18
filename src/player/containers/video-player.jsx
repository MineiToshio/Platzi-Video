import React, {Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout.jsx";
import Video from "../components/video.jsx";
import Title from "../components/title.jsx";
import PlayPause from "../components/play-pause.jsx";
import Timer from "../components/timer.jsx";
import Controls from "../components/video-player-controls.jsx";
import { formattedTime } from "../../libs/utilities.js";
import ProgressBar from "../components/progress-bar.jsx";
import Spinner from "../components/spinner.jsx";
import Volume from "../components/volume.jsx";
import FullScreen from "../components/full-screen.jsx";

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTimeFloat: 0,
    durationFloat: 0,
    loading: false
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: formattedTime(this.video.duration),
      durationFloat: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      currentTimeFloat: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen()
    }
    else {
      document.webkitExitFullscreen();
    }
  }

  setRef = element => {
    this.player = element;
  }

  render () {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title}/>
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
          <ProgressBar 
            duration={this.state.durationFloat} 
            value={this.state.currentTimeFloat} 
            handleProgressChange={this.handleProgressChange} />
          <Volume handleVolumeChange={this.handleVolumeChange} />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src} />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;