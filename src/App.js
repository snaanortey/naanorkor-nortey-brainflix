import CommentBox from "./components/CommentBox/CommentBox";
import detailedVideos from "./assets/Data/video-details.json";
import MainVideoDetails from "./components/MainVideoDetails/MainVideoDetails";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import summarisedVideos from "./assets/Data/videos.json";
import { useState } from "react";
import MainVideo from "./components/MainVideo/MainVideo";
import Header from "./components/Header/Header";
import "./App.scss";

const App = () => {
  const [displayVideo, setdisplayVideo] = useState(detailedVideos[0]);

  const sideVideoClickHandler = (sideVideoId) => {
    const newDisplayVideo = detailedVideos.find(
      (sideVideo) => sideVideo.id === sideVideoId
    );
    setdisplayVideo(newDisplayVideo);
  };

  return (
    <>
      <Header />
      <main>
        <MainVideo video={displayVideo} />
        <div className="videos-container">
          <div className="videos-container__one">
            <MainVideoDetails video={displayVideo} />
            <CommentBox comments={displayVideo.comments} />
          </div>
          <hr className="videos-container__divider" />
          <div className="videos-container__two"> 
          <SideVideoList
            sideVideoClickHandler={sideVideoClickHandler}
            currentDisplayVideo={displayVideo.id}
          />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
