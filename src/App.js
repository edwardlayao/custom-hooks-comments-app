import React, { useContext, useEffect } from "react";
import "./App.css";
import InputComment from "./components/InputComment/InputComment";
import Comments from "./components/Comments/Comments";
import CommentContext from "./context/CommentContext";
import useHttpRequest from "./hooks/useHttpRequest";

function App() {
  const [error, sendRequest] = useHttpRequest(
    "GET",
    "https://test-react-starwars-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
    sendRequestHandler
  );
  const commentCtx = useContext(CommentContext);

  // we load the comments initally with useEffect
  useEffect(() => {
    sendRequest();
  }, []);

  // the function (responseHandler) that will be executed on sendRequest
  function sendRequestHandler(responseData) {
    // firebase returns keys that have jumbled letters/numbers which sucks
    // we get the values and return them to an array, so we can get the comments
    const commentList = Object.values(responseData);
    commentCtx.updateComments(commentList);
  }

  return (
    <div className="App">
      <main>
        <InputComment></InputComment>
        <Comments></Comments>
      </main>
    </div>
  );
}

export default App;
