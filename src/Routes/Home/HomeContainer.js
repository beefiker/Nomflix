import { moviesApi } from "api";
import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  // states
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("true");

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

        console.log(nowPlaying, upcoming, popular);
      } catch {
        setError("Can't find Movie information");
      } finally {
        setLoading("false");
      }
    };
    fetchData();
  }, []);

  return (
    <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
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
