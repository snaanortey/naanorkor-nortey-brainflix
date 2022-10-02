import "./MainVideo.scss";

const MainVideo = (props) => {
  return (
    <div className="mainVideo">
      <div className="mainVideo__container"> 
      <video
        className="mainVideo__vid"
        controls
        poster={props.video.image}
        src={props.video.image}
        alt={props.video.channel} video
      ></video>
      </div>
    </div>
  );
};

export default MainVideo;
