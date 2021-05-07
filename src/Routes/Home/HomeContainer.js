import { moviesApi } from "api";
import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
`;

const HomeContainer = () => {
  // states
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError("Can't find Movie information");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>nowPlaying</h1>
      <DIV>
        {nowPlaying.map((item) => (
          <HomePresenter nowPlaying={item} error={error} loading={loading} />
        ))}
      </DIV>

      <h1>upcoming</h1>
      <DIV>
        {upcoming.map((item) => (
          <HomePresenter upcoming={item} error={error} loading={loading} />
        ))}
      </DIV>
      {/* <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} /> */}
    </>
  );
};

export default HomeContainer;

// export default class extends React.Component {
//   state = {
//     nowPlaying: null,
//     upcoming: null,
//     popular: null,
//     error: null,
//     loading: true,
//   };

//   render() {
//     const { nowPlaying, upcoming, popular, error, loading } = this.state;
//     return (
//       <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
//     );
//   }
// }
