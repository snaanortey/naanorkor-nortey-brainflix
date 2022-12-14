import "./MainVideo.scss";

const MainVideo = (props) => {
  return (
    <div className="mainVideo">
      <div className="mainVideo__container">
        <video
          className="mainVideo__vid"
          controls
          poster={props.videos.image}
          src={props.videos.image}
          alt={props.videos.channel}
        ></video>
      </div>
    </div>
  );
};

export default MainVideo;
