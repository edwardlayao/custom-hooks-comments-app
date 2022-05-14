import React, { useState } from "react";

const CommentContext = React.createContext({
  commentList: [],
  updateComments: () => {},
});

export default CommentContext;

export function CommentContextProvider(props) {
  const [commentList, setCommentList] = useState([]);

  function updateComments(newComments) {
    setCommentList(newComments);
  }

  return (
    <CommentContext.Provider
      value={{ commentList: commentList, updateComments: updateComments }}
    >
      {props.children}
    </CommentContext.Provider>
  );
}
