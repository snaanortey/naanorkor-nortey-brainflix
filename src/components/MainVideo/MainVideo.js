import "./MainVideo.scss";

const MainVideo = ({video}) => {

    return (
      <div className="mainVideo">
        <img src={video.image} className="mainVideo__vid"></img>
      </div>
    );
}

export default MainVideo;