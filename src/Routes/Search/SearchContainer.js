import { moviesApi, tvApi } from "api";
import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  // states
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  let handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };

  let searchByTerm = async (term) => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(term);
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results");
    } finally {
      setLoading("false");
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
