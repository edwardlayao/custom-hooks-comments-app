import React from "react";
import styles from "./InputComment.module.css";
import InputCommentForm from "./InputCommentForm/InputCommentForm";

const InputComment = () => {
  return (
    <div className={styles.container}>
      <InputCommentForm></InputCommentForm>
    </div>
  );
};

export default InputComment;
