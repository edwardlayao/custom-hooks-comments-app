import React, { useRef, useContext } from "react";
import styles from "./InputCommentForm.module.css";
import useHttpRequest from "../../../hooks/useHttpRequest";
import CommentContext from "../../../context/CommentContext";

const InputCommentForm = () => {
  const commentCtx = useContext(CommentContext);
  const [error, sendRequest] = useHttpRequest(
    "POST",
    "https://test-react-starwars-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
    postResponseHandler
  );
  const [errorGet, sendRequestGet] = useHttpRequest(
    "GET",
    "https://test-react-starwars-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
    getResponseHandler
  );

  const textInputRef = useRef();
  const textAreaRef = useRef();
  function onSubmitHandler(event) {
    event.preventDefault();
    if (isValid(textInputRef) && isValid(textAreaRef)) {
      const commentObj = createCommentObject(
        textInputRef.current.value,
        textAreaRef.current.value
      );
      sendRequest(commentObj);
      resetInputs([textInputRef, textAreaRef]);
    }
  }

  function getResponseHandler(responseData) {
    console.log(responseData);
    const commentList = Object.values(responseData);
    commentCtx.updateComments(commentList);
  }

  function postResponseHandler() {
    sendRequestGet();
  }

  function createCommentObject(title, comment) {
    return { title: title, comment: comment };
  }

  function resetInputs(refs) {
    refs.forEach((ref) => {
      ref.current.value = "";
    });
  }

  function isValid(ref) {
    if (ref.current.value.trim("") === "") return false;
    return true;
  }
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler} className={styles["form-container"]}>
        <label>Input your Comment here:</label>
        <input ref={textInputRef} type="text" placeholder="title" />
        <textarea
          ref={textAreaRef}
          name="comment"
          id=""
          cols="30"
          rows="10"
          placeholder="comment"
        ></textarea>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputCommentForm;
