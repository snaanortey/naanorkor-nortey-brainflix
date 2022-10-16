import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import SideVideo from "../../components/SideVideo/SideVideo";
import HomePage from "../HomePage/HomePage";

export default function UploadPage() {
  let Navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newVideo = {
      title: form.videoTitle.value,
      channel: form.videoDescription.value,
      image: "",
      description:
        "Traveling by train can be convenient, enjoyable and economical. You can minimize your risk of injury, illness, and theft by taking a few simple precautions. Before you travel, you should pack only the necessities. This will make your luggage easy to carry and store during your travels. You should always assume that the tap water on the train is not potable. Whenever it is possible, stock up on bottles of water to reduce the risk of dehydration. Remember, never accept food or drinks from strangers!",
      views: "3,092,284",
      likes: "75,985",
      duration: "4:20",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: 1632344461000,
      comments: [
        {
          id: "2d818087-c1f4-4ec2-bcdc-b545fd6ec258",
          name: "Martin Evergreen",
          comment:
            "I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!",
          likes: 3,
          timestamp: 1632512763000,
        },
        {
          id: "191de346-b3c2-47b4-bf5b-6db90d1e3bdc",
          name: "Emily Harper",
          comment:
            "Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.",
          likes: 0,
          timestamp: 1632496261000,
        },
      ],
    };

    axios
      .post("http://localhost:5050/videos", newVideo)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });

    form.reset();

    alert("Thanks for uploading your video 😃");

    // Navigate to homePage
    Navigate("/");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <hr className="uploadpage__divider" />
      <div className="uploadpage">
        <h2 className="uploadpage__title">Upload Video</h2>
        <hr className="uploadpage__title-divider" />

        <div className="uploadpage__container">
          <div className="uploadpage__header">
            <h3 className="uploadpage__sub-title">VIDEO THUMBNAIL</h3>
            <div className="uploadpage__image-container">
              <img className="uploadpage__image" src={image} alt="thumbnail" />
            </div>
          </div>

          <div className="uploadpage__form-one">
            <label name="videoTitle" className="uploadpage__sub-title">
              {" "}
              TITLE YOUR VIDEO
            </label>
            <div className="uploadpage__input-div">
              <input
                className="uploadpage__input uploadpage__input--title"
                type="text"
                name="videoTitle"
                placeholder="Add a title to your video"
              />
            </div>
            <label name="videoDescription" className="uploadpage__sub-title">
              {" "}
              ADD A VIDEO DESCRIPTION
            </label>
            <div className="uploadpage__input-div">
              <input
                className="uploadpage__input uploadpage__input--description"
                type="text"
                name="videoDescription"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="uploadpage__input-div">
          <hr className="uploadpage__input-divider" />
        </div>
        <div className="uploadpage__button-div">
          <h3 className="uploadpage__end-text uploadpage__end-text--tablet">
            CANCEL
          </h3>
          <button className="uploadpage__button">PUBLISH</button>
          <h3 className="uploadpage__end-text uploadpage__end-text--mobile">
            CANCEL
          </h3>
        </div>
      </div>
    </form>
  );
}
