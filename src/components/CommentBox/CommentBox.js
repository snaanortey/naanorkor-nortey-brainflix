import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentBox.scss";

const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <p className="comments-number">{props.comments.length} Comments</p>
      <CommentForm />
      <hr className="form__divider"/>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentBox;
