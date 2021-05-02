import React, { useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  // states
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState("true");

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
