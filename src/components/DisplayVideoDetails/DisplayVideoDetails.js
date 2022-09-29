// import ".DisplayVideoDetails.scss";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";

const DisplayVideoDetails = ({users}) => {

    //let users = currentUser;
    return (
      <div className="videoDetails">
        <h1 className="videoDetails__title">{users.title}</h1>
        <hr className="videoDetails__mobile-divider"/>
        <div className="videoDetails__subtitle">
          <div className="videoDetails__subtitleone">
            <h2 className="videoDetails__channel">By {users.channel}</h2>
            <p className="videoDetails__date">{users.timestamp}</p>
          </div>
          <div className="videoDetails__subtitletwo">
            <div className="videoDetails__views">
              <img src={viewIcon} alt="view icon" />
              <p className="videoDetails__view-number">{users.views}</p>
            </div>
            <div className="videoDetails__likes">
              <img
                src={likeIcon}
                alt="like icon"
                className="videoDetails__like-icon"
              />
              <p className="videoDetails__like-number">{users.likes}</p>
            </div>
            <hr className="videoDetails__title-divider"/>
          </div>
          <p className="videoDetails__description">{users.description}</p>
        </div>
      </div>
    );
}

export default DisplayVideoDetails;