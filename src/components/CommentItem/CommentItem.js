import "./CommentItem.scss"

const CommentItem = (props) => {

   const formatTimestamp =(timestamp)=> {
    new Date (timestamp).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
   }
return (
  <div className="commentItem">
    <hr className="commentItem__divider" />
    <div className="commentItem__box">
      <div className="commentItem__image"></div>
      <div className="commentItem__content">
        <div className="commentItem__headers">
          <h3 className="commentItem__name">{props.comment.name}</h3>
          <h3 className="commentItem__date">
          {props.comment.timestamp}
          </h3>
        </div>
        <div className="commentItem__textBox">
          <p className="commentItem__text">{props.comment.comment}</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default CommentItem;