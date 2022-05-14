import React, { useContext, useEffect, useState } from "react";
import CommentList from "./CommentList/CommentList";
import styles from "./Comments.module.css";
import CommentContext from "../../context/CommentContext";

const Comments = () => {
  const commentCtx = useContext(CommentContext);
  let CommentListRender = commentCtx.commentList.map((item) => {
    return (
      <CommentList
        key={`${Math.random()}${Date.now().toString()}`}
        title={item.title}
        comment={item.comment}
      ></CommentList>
    );
  });
  return <div className={styles.container}>{CommentListRender}</div>;
};

export default Comments;
