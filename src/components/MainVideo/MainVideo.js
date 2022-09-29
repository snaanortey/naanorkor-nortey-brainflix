import "./MainVideo.scss";

const MainVideo = (props) => {

    return (
      <div className="mainVideo">
        <img src={props.video.image} alt={props.video.title} video className="mainVideo__vid"></img>
      </div>
    );
}

export default MainVideo;