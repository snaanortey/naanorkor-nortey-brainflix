import CommentBox from "../../components/CommentBox/CommentBox";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoDetails from "../../components/MainVideoDetails/MainVideoDetails";
import SideVideo from "../../components/SideVideo/SideVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIBaseUrl, firstDisplayVideoId } from "../../utils";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const [displayedvideo, setDisplayedVideo] = useState(null);

  // Creates state for when new comment is submitted
  const [newCommentUpdated, setNewCommentUpdated] = useState(false);

  const { videoId = firstDisplayVideoId } = useParams();
  // what if this components is the one fttching the videos from the api
  // instead of you doing it in SideVideo component

  //that way you can get the 1st video id from the API data instead of hardcoding

  // API calls nneed to happen in useEffect of a component

  const showVideoDetails = () => {
    axios
      .get(`${APIBaseUrl}/videos/${videoId}`)
      .then((response) => {
        // Changes initial state of displayedvideo
        setDisplayedVideo(response.data);
      })
      .catch((error) => {});
  };

  // Set subsequent display to be video for which
  useEffect(() => {
    showVideoDetails();
  }, [videoId, newCommentUpdated]);

  if (!displayedvideo) {
    return <main>Loading Video...</main>;
  }

  return (
    <>
      <div>{console.log("Homepage Rendered")}</div>
      <MainVideo videos={displayedvideo} />
      <div className="videos-container">
        <div className="videos-container__one">
          <MainVideoDetails videos={displayedvideo} />
          <CommentBox
            reloadComments={setNewCommentUpdated}
            comments={displayedvideo.comments}
          />
        </div>
        <hr className="videos-container__divider" />
        <div className="videos-container__two">
          <SideVideo />
        </div>
      </div>
    </>
  );
};

export default HomePage;
