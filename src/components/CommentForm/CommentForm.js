import avatar from "../../assets/Images/Mohan-muruge.jpg";
import submitIcon from "../../assets/Icons/add_comment.svg";
import "./CommentForm.scss";
import { postComment, firstDisplayVideoId } from "../../utils";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  // Grab the video id params value from react router
  // videoId is destructured from the params object, with a fall back to firstDisplayVideoId value
  // Fall back is needed when we are viewing the video page using the homepage route
  const { videoId = firstDisplayVideoId } = useParams();

  const handleCommentFormSubmit = (event) => {
    //Prevents form from reloading after submission by user
    event.preventDefault();

    const form = event.target;

    // prevent invalid form submission
    if (!form.comment.validity.valid) {
      alert("Invalid input comment textbox.");
      return;
    }

    //Create an object from the form input, using a hardcoded name and comment properties in post http server
    const newComment = {
      name: "Naa",
      comment: form.comment.value,
    };

    const postPromise = postComment(videoId, newComment);

    //Post comment to http server using post http request
    postPromise
      .then((response) => {
        console.log("comment posted", response);
      })
      .catch((err) => {
        alert(err);
      });

    // Reset form after submission
    form.reset();
  };

  return (
    <form onSubmit={handleCommentFormSubmit} name="newComment" className="form">
      <div className="form__image-div">
        <img className="form__image" src={avatar} alt="profile-pic" />
      </div>
      <div className="form__content">
        <h3 className="form__title">JOIN THE CONVERSATION</h3>

        <div className="form__template">
          <input
            name="comment"
            type="text"
            className="form__input"
            placeholder="Add a new comment"
          />

          <button className="form__button" type="submit">
            <img
              className="form__button-icon"
              src={submitIcon}
              alt="submit icon"
            ></img>
            <p className="form__button-text">COMMENT</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
