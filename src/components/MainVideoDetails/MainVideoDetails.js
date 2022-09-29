// import ".DisplayVideoDetails.scss";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";

const MainVideoDetails = (props) => {
 
  return (
    <div className="videoDetails">
      <h1 className="videoDetails__title">{props.video.title}</h1>
      <hr className="videoDetails__mobile-divider" />
      <div className="videoDetails__subtitle">
        <div className="videoDetails__subtitleone">
          <h2 className="videoDetails__channel">By {props.video.channel}</h2>
          <p className="videoDetails__date">{props.video.timestamp}</p>
        </div>
        <div className="videoDetails__subtitletwo">
          <div className="videoDetails__views">
            <img src={viewIcon} alt="view icon" />
            <p className="videoDetails__view-number">{props.video.views}</p>
          </div>
          <div className="videoDetails__likes">
            <img
              src={likeIcon}
              alt="like icon"
              className="videoDetails__like-icon"
            />
            <p className="videoDetails__like-number">{props.video.likes}</p>
          </div>
          <hr className="videoDetails__title-divider" />
        </div>
        <p className="videoDetails__description">{props.video.description}</p>
      </div>
    </div>
  );
};

export default MainVideoDetails;
