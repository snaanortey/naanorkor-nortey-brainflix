import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentBox.scss";

const CommentBox = (props) => {
  console.log("CommentBox Rendered");
  return (
    <div className="commentBox">
      <p className="comments-number">{props.comments.length} Comments</p>

      <CommentForm />

      {props.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      <hr className="form__divider" />
    </div>
  );
};

export default CommentBox;
