import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessege, setErrorMessege] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setErrorMessege("");
    } catch (err) {
      setErrorMessege("Something went wrong");
      setResults([]);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessege];
};
