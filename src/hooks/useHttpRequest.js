import { useState } from "react";

const useHttpRequest = (method, url, responseHandler) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let response;

  const sendRequest = async (payload = null) => {
    try {
      console.log("sending req  ");
      setIsLoading(true);
      // POST METHOD for InputCommentForm
      if (method === "POST") {
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ ...payload }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      if (method === "GET") {
        response = await fetch(url);
      }
      if (!response.ok) throw new Error("Request Failed!");
      const json = await response.json();
      responseHandler(json);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  return [isLoading, error, sendRequest];
};

export default useHttpRequest;
