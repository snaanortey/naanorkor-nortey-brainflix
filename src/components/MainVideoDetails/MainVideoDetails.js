import "./MainVideoDetails.scss";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";
import {formatTimestamp} from "../../utils";

const MainVideoDetails = (props) => {
 
  return (
    <div className="videoDetails">
      <h1 className="videoDetails__title">{props.video.title}</h1>
      <hr className="videoDetails__divider videoDetails__divider--mobile" />
      <div className="videoDetails__subtitle">
        <div className="videoDetails__subtitles">
          <div className="videoDetails__subtitleone">
            <h2 className="videoDetails__channel">By {props.video.channel}</h2>
            <p className="videoDetails__date">{formatTimestamp(props.video.timestamp)}</p>
          </div>
          <div className="videoDetails__subtitletwo">
            <div className="videoDetails__views">
              <img
                className="videoDetails__viewIcon"
                src={viewIcon}
                alt="view icon"
              />
              <p className="videoDetails__view-number">{props.video.views}</p>
            </div>
            <div className="videoDetails__likes">
              <img
                src={likeIcon}
                alt="like icon"
                className="videoDetails__likeIcon"
              />
              <p className="videoDetails__like-number">{props.video.likes}</p>
            </div>
          </div>
        </div>
        <hr className="videoDetails__divider" />
        <p className="videoDetails__description">{props.video.description}</p>
      </div>
    </div>
  );
};

export default MainVideoDetails;
