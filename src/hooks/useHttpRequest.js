import { useState } from "react";

const useHttpRequest = (method, url, responseHandler) => {
  const [error, setError] = useState(null);
  let response;

  // payload are for POST methods.
  const sendRequest = async (payload = null) => {
    try {
      console.log("sending req  ");

      // POST METHOD for InputCommentForm aka creating new Comments
      if (method === "POST") {
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ ...payload }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      //GET METHOD for InputCommentForm aka getting Comment List from API
      if (method === "GET") {
        response = await fetch(url);
      }
      if (!response.ok) throw new Error("Request Failed!");
      const json = await response.json();
      responseHandler(json);
    } catch (error) {
      setError(error.message);
    }
  };
  return [error, sendRequest];
};

export default useHttpRequest;
