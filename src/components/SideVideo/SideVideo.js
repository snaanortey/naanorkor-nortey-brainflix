import "./SideVideo.scss";
import axios from "axios";
import { APIBaseUrl, APIKey } from "../../utils";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const SideVideo = () => {
  const [sideVideos, setSideVideos] = useState(null);

  const getSideVideos = async () => {
    const { data } = await axios.get(`${APIBaseUrl}/videos`, {
      params: {
        api_key: APIKey,
      },
    });

    setSideVideos(data);
  };

  useEffect(() => {
    getSideVideos();
  }, []);

  if (!sideVideos) {
    return <main>Loading Videos...</main>;
  }
  return (
    <div className="sideVideos">
      <h2 className="sideVideos__header">NEXT VIDEOS</h2>
      <ul className="sideVideos__list">
        <div className="sideVideos__container">
          {sideVideos.map((video) => (
            <Link className="sideVideo" key={video.id} to={`/video/${video.id}`}>
              <div className="sideVideo__image-div">
                <img
                  src={video.image}
                  alt={video.channel}
                  video
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
