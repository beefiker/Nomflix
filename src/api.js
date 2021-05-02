import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "077990068b6dd97e94e25a6da056562a",
    language: "en-US",
  },
});

export default api;
