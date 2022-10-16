import CommentBox from "../../components/CommentBox/CommentBox";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoDetails from "../../components/MainVideoDetails/MainVideoDetails";
import SideVideo from "../../components/SideVideo/SideVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../utils";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const [displayedvideo, setDisplayedVideo] = useState(null);

  const [sideVideos, setSideVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  // Creates state for when new comment is submitted
  const [reloadMe, setReloadMe] = useState(false);

  const { videoId } = useParams();

  const showVideoDetails = async () => {
    try {
      const response = await axios.get(`${APIBaseUrl}/videos/`);
      const allVideos = response.data;

      const tempVideoId = videoId ? videoId : allVideos[0].id;

      const currentVideo = allVideos.find((video) => video.id === tempVideoId);

      // Filter out the video that is in display
      const sideVideos = allVideos.filter(
        (video) => video.id !== currentVideo.id
      );

      // Changes initial state of displayedvideo
      setDisplayedVideo(currentVideo);

      setCurrentVideoId(tempVideoId);

      setSideVideos(sideVideos);
    } catch (error) {
      console.log(error);
      alert("An error occured while loading the video.");
    }
  };

  // Set subsequent display to be video for which
  useEffect(() => {
    showVideoDetails();
  }, [videoId, reloadMe]);

  if (!displayedvideo) {
    return <main>Loading Video...</main>;
  }

  return (
    <>
      <MainVideo videos={displayedvideo} />
      <div className="videos-container">
        <div className="videos-container__one">
          <MainVideoDetails
            videos={displayedvideo}
            reloadDisplayvideo={setReloadMe}
          />
          <CommentBox
            reloadComments={setReloadMe}
            comments={displayedvideo.comments}
            videoId={currentVideoId}
          />
        </div>
        <hr className="videos-container__divider" />
        <div className="videos-container__two">
          <SideVideo videos={sideVideos} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
