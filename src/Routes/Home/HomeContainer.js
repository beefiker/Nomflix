import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  // states
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("");

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
