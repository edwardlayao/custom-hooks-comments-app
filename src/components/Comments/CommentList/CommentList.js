import React from "react";
import styles from "./CommentList.module.css";

const CommentList = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <p>{props.comment}</p>
    </div>
  );
};

export default CommentList;
