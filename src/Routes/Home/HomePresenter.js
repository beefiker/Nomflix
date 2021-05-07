import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieCompo from "./MovieCompo";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  if (nowPlaying) {
    return <MovieCompo nowPlaying={nowPlaying} />;
  } else if (upcoming) {
    return <MovieCompo upcoming={upcoming} />;
  }
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
