import React, { useState, useEffect, useRef, createContext } from "react";
const ApiDataContext = createContext();

const ApiData = (props) => {
  // state component
  const fetchVar = useRef();
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("ng");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("entertainment");

  // API PROPERTIES
  const BASE_URL = `https://newsapi.org`;
  const LINK_PROPERTY = `/v2/top-headlines?country=${country}&category=${category}&apiKey=`;
  const API_KEY = "d3194468809c4edcbbf57382baa6d200";
  const detail = BASE_URL + LINK_PROPERTY + API_KEY;

  const fetchData = async () => {
    fetch(detail, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(true);
      });
  };

  fetchVar.current = fetchData;
  useEffect(() => {
    fetchVar.current();
  }, [country, category]);
  return (
    <ApiDataContext.Provider value={{ news, loading, setCategory, setCountry }}>
      {props.children}
    </ApiDataContext.Provider>
  );
};
export { ApiDataContext, ApiData };
