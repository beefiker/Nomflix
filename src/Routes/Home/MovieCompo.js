import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieCompo = ({ nowPlaying, upcoming }) => {
  if (nowPlaying) {
    return (
      <DIV>
        <img src={`https://image.tmdb.org/t/p/w154/${nowPlaying.poster_path}`} alt="" srcset="" />
        <H1>{nowPlaying.title}</H1>
      </DIV>
    );
  } else {
    return (
      <DIV>
        <img src={`https://image.tmdb.org/t/p/w154/${upcoming.poster_path}`} alt="" srcset="" />
        <H1>{upcoming.title}</H1>
      </DIV>
    );
  }
};

export default MovieCompo;
