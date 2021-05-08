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

// const Movies = ({ item }) => {
//   return (
//     <DIV>
//       <a href={`movie/${item.id}`}>
//         <img src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`} alt="" srcset="" />
//         <H1>{item.title}</H1>
//       </a>
//     </DIV>
//   );
// };

// const MovieCompo = ({ nowPlaying, upcoming, popular }) => {
//   if (nowPlaying) {
//     return <Movies item={nowPlaying} />;
//   } else if (upcoming) {
//     return <Movies item={upcoming} />;
//   } else if (popular) {
//     return <Movies item={popular} />;
//   }
// };

// export default MovieCompo;
