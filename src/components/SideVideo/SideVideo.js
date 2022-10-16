import { Link } from "react-router-dom";
import "./SideVideo.scss";

const SideVideo = (props) => {
  
  return (
    <div className="sideVideos">
      <h2 className="sideVideos__header">NEXT VIDEOS</h2>
      <ul className="sideVideos__list">
        <div className="sideVideos__container">
          {props.videos.map((video) => (
            <Link
              className="sideVideo"
              key={video.id}
              to={`/video/${video.id}`}
            >
              <div className="sideVideo__image-div">
                <img
                  src={video.image}
                  alt={video.channel}
                  className="sideVideo__image"
                />
              </div>

              <div className="sideVideo__content">
                <h2 className="sideVideo__title">{video.title}</h2>
                <p className="sideVideo__channel">{video.channel}</p>
              </div>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SideVideo;
