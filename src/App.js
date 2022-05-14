import React, { useContext, useEffect } from "react";
import "./App.css";
import InputComment from "./components/InputComment/InputComment";
import Comments from "./components/Comments/Comments";
import CommentContext from "./context/CommentContext";
import useHttpRequest from "./hooks/useHttpRequest";

function App() {
  const [isLoading, error, sendRequest] = useHttpRequest(
    "GET",
    "https://test-react-starwars-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
    sendRequestHandler
  );
  const commentCtx = useContext(CommentContext);
  useEffect(() => {
    sendRequest();
  }, []);

  function sendRequestHandler(responseData) {
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
