import React from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  // states
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("true");

  return (
    <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />
  );
};

export default TVContainer;
