import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";
import sideVideoList from "../../assets/Data/videos.json";

const SideVideoList = (props) => {
    const filteredVideos = sideVideoList.filter((sideVideo) => sideVideo.id !== props.currentDisplayVideo);

    return (
      <div className="sideVideos">
        <ul className="sideVideos__list">
          {filteredVideos.map((sideVideo) => (
            <SideVideo
              key={sideVideo.id}
              sideVideo={sideVideo}
              sideVideoClickHandler={props.sideVideoClickHandler}
            />
          ))}
        </ul>
      </div>
    );
}

export default SideVideoList;