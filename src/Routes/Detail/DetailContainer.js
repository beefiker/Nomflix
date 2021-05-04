import { moviesApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  const {
    location: { pathname },
  } = props;
  const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));
  // states
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    const fetchData = async () => {
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = props;
      // const isMovie = pathname.includes("/movie/");
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      let result = null;
      try {
        if (isMovie) {
          const request = await moviesApi.movieDetail(parsedId);
          result = request.data;
        } else {
          const request = await tvApi.showDetail(parsedId);
          result = request.data;
        }
      } catch {
        setError("Cant find anything");
      } finally {
        setLoading(false);
        setResult(result);
      }
    };
    fetchData();
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
