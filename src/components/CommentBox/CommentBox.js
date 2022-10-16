import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentBox.scss";
import React from "react";

const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <p className="comments-number">{props.comments.length} Comments</p>

      <CommentForm reloadParent={props.reloadComments} />

      {props.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} reloadNonDeletedComments={props.reloadComments}/>
      ))}

      <hr className="form__divider" />
    </div>
  );
};

export default CommentBox;
