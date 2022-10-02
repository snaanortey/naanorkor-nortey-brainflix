import avatar from "../../assets/Images/Mohan-muruge.jpg";
import submitIcon from "../../assets/Icons/add_comment.svg"
import "./CommentForm.scss"


const CommentForm = () => {

    return (
      <form name="newComment" className="form">
        <div className="form__image-div">
          <img className="form__image" src={avatar} alt="profile-pic" />
        </div>
        <div className="form__content">
          <h3 className="form__title">JOIN THE CONVERSATION</h3>

          <div className="form__template">
            <input
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
}

export default CommentForm;