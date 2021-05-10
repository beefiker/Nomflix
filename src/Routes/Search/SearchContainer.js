import { moviesApi, tvApi } from "api";
import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  // states
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  let handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };

  let updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    setSearchTerm(value);
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
      setLoading(false);
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
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
