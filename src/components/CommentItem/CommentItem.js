import "./CommentItem.scss";
import { formatTimestamp, APIBaseUrl } from "../../utils";
import deleteIcon from "../../assets/Icons/icon-delete.svg";
import likeIcon from "../../assets/Icons/icon-like.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentItem = (props) => {
  const { videoId } = useParams();

  const deleteHandler = async (e) => {
    // get the containg div that has the id
    const commentDiv = e.target.closest(".commentItem__delete");

    const commentId = commentDiv.dataset.id;

    // call the delete API to
    await axios.delete(
      `${APIBaseUrl}/videos/${props.videoId}/comments/${commentId}`
    );

    alert("Comment deleted");

    props.reloadNonDeletedComments(Math.random);
  };

  return (
    <div className="commentItem">
      <hr className="commentItem__divider" />
      <div className="commentItem__box">
        <div className="commentItem__image"></div>
        <div className="commentItem__content">
          <div className="commentItem__headers">
            <h3 className="commentItem__name">{props.comment.name}</h3>
            <h3 className="commentItem__date">
              {formatTimestamp(props.comment.timestamp)}
            </h3>
          </div>
          <div className="commentItem__textBox">
            <p className="commentItem__text">{props.comment.comment}</p>
          </div>
        </div>
      </div>
      <div className="commentItem__add-ons">
        <div className="commentItem__like">
          <img
            src={likeIcon}
            alt="like icon"
            className="commentItem__like-button"
          />
          <h3 className="commentItem__like-text">Like</h3>
        </div>
        <div
          onClick={deleteHandler}
          className="commentItem__delete"
          data-id={props.comment.id}
        >
          <img
            src={deleteIcon}
            alt="delete icon"
            className="commentItem__delete-button"
          />
          <h3 className="commentItem__delete-text">Delete</h3>
        </div>
      </div>
    </div>
  );
};
export default CommentItem;
