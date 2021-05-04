import { tvApi } from "api";
import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  // states
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        const {
          data: { results: popular },
        } = await tvApi.popular();
        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();

        setTopRated(topRated);
        setPopular(popular);
        setAiringToday(airingToday);
      } catch {
        setError("Can't find TV Show information");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />
  );
};

export default TVContainer;
