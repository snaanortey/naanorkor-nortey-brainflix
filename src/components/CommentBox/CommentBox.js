import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";

const CommentBox = ({comments}) => {
  return (
    <div className="commentBox">
      <p className="comments-number">{comments.length} Comments</p>
      <CommentForm />
      {comments.map((comment, i) => (
        <CommentItem key={i} comment={comment} />
      ))}
    </div>
  );
};

export default CommentBox;
