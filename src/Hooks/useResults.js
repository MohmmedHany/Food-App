import { useState, useEffect } from "react";
import yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (newTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: newTerm,
          location: "NYC",
        },
      });
      setResults(response.data.businesses);
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Something Went Wrong");
    }
  };

  useEffect(() => {
    searchApi("Pork");
  }, []);

  return [searchApi, results, errorMsg];
};
