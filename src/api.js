import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "077990068b6dd97e94e25a6da056562a",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  search: (term) =>
    api.get("search/movie", {
      params: { query: encodeURIComponent(term) },
    }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieReviews: (id) =>
    api.get(`movie/${id}/reviews`, {
      params: {
        page: 1,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  search: (term) =>
    api.get("search/tv", {
      params: { query: encodeURIComponent(term) },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};
