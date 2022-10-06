import CommentBox from "../components/CommentBox/CommentBox";
import MainVideo from "../components/MainVideo/MainVideo";
import MainVideoDetails from "../components/MainVideoDetails/MainVideoDetails";
import SideVideo from "../components/SideVideo/SideVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIBaseUrl, APIKey, firstDisplayVideoId } from "../utils";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [displayedvideo, setDisplayedVideo] = useState(null);

  const { videoId = firstDisplayVideoId } = useParams();

  const showVideoDetails = () => {
    console.log("effect called: fetching api data for video "+videoId);
    axios
      .get(`${APIBaseUrl}/videos/${videoId}`, {
        params: {
          api_key: APIKey,
        },
      })
      .then((response) => {

        // Changes initial state of displayedvideo
        setDisplayedVideo(response.data);
      })
      .catch((error) => {});
  };

  // Set subsequent display to be video for which
  useEffect(() => {
    showVideoDetails();
  }, [videoId]);

  if (!displayedvideo) {
    return <main>Loading Video...</main>;
  }

  return (
    <>
      <div>{console.log("Homepage Rendered")}</div>
      <MainVideo videos={displayedvideo} />
      <MainVideoDetails videos={displayedvideo} />
      <CommentBox comments={displayedvideo.comments} />
      <SideVideo />
    </>
  );
};

export default HomePage;
