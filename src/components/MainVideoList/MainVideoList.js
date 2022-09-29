import "./MainVideoList.scss";
import MainVideo from "../MainVideo/MainVideo";

const MainVideoList = ({videos}) => {

   
    
    return (
      <div>
        {videos.map((video) => (
          <MainVideo key={video.id} video={video} />
        ))}
      </div>
    );
}

export default MainVideoList;