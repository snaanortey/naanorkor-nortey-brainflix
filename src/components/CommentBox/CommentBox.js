import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";

const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <p className="comments-number">{props.comments.length} Comments</p>
      <CommentForm />
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentBox;
