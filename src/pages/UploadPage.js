import { useNavigate } from "react-router-dom";
import image from "../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage() {
  let Navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert("Thanks for uploading your video 😃");

    handleNavigation();
  };

  const handleNavigation = () => {
    Navigate("/");
  };

  return (
    <>
      <hr className="uploadpage__divider" />
      <div className="uploadpage">
        <h2 className="uploadpage__title">Upload Video</h2>
        <hr className="uploadpage__title-divider" />

        <div className="uploadpage__container">
          <div className="uploadpage__header">
            <h3 className="uploadpage__sub-title">VIDEO THUMBNAIL</h3>
            <div className="uploadpage__image-container">
              <img
                className="uploadpage__image"
                src={image}
                alt //////////////////
              />
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
          <button onClick={handleFormSubmit} className="uploadpage__button">
            PUBLISH
          </button>
          <h3 className="uploadpage__end-text uploadpage__end-text--mobile">
            CANCEL
          </h3>
        </div>
      </div>
    </>
  );
}
