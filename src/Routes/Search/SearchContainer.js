import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  // states
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("true");

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
    />
  );
};

export default SearchContainer;
