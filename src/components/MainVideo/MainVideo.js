import "./MainVideo.scss";

const MainVideo = (props) => {
  return (
    <div className="mainVideo">
      <video
        className="mainVideo__vid"
        controls
        poster={props.video.image}
        src={props.video.image}
        alt={props.video.channel} video
      ></video>
    </div>
  );
};

export default MainVideo;
