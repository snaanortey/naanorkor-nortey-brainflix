import "./MainVideoDetails.scss";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";
import { formatTimestamp, APIBaseUrl } from "../../utils";
import axios from "axios";

const MainVideoDetails = (props) => {
  const likeHandler = (e) => {
    const videoId = e.target.dataset.id;

    // call the put API to
    axios.put(`${APIBaseUrl}/videos/${videoId}/likes`).then((response) => {
      alert("Thanks for liking this video");
    }).catch((err)=>{console.log(err)});

    props.reloadDisplayvideo(Math.random);
  };

  return (
    <div className="videoDetails">
      <h1 className="videoDetails__title">{props.videos.title}</h1>
      <hr className="videoDetails__divider videoDetails__divider--mobile" />
      <div className="videoDetails__subtitle">
        <div className="videoDetails__subtitles">
          <div className="videoDetails__subtitleone">
            <h2 className="videoDetails__channel">By {props.videos.channel}</h2>
            <p className="videoDetails__date">
              {formatTimestamp(props.videos.timestamp)}
            </p>
          </div>
          <div className="videoDetails__subtitletwo">
            <div className="videoDetails__views">
              <img
                className="videoDetails__viewIcon"
                src={viewIcon}
                alt="view icon"
              />
              <p className="videoDetails__view-number">{props.videos.views}</p>
            </div>
            <div className="videoDetails__likes">
              <img
                onClick={likeHandler}
                src={likeIcon}
                alt="like icon"
                className="videoDetails__likeIcon"
                data-id={props.videos.id}
              />
              <p className="videoDetails__like-number">{props.videos.likes}</p>
            </div>
          </div>
        </div>
        <hr className="videoDetails__divider" />
        <p className="videoDetails__description">{props.videos.description}</p>
      </div>
    </div>
  );
};

export default MainVideoDetails;
