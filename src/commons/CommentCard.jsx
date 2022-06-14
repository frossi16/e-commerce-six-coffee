import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="individualComment mx-3 row py-3 ">
      <div className="col-10">{comment.comment}</div>
      <div className="col-2 d-flex justify-content-end">{comment.puntuation}</div>
    </div>

  );
};

export default CommentCard;