export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg";

export const AVATAR_URL =
  "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXUncxa4k9EGMRUTsaOelaT11ryHrnpgcG4TBLjYl6HvAJAB_avZt0p9PN0AxUGZZ5KhiJgpp1gAlHOBD5mUmIZOqYabj4GysDPz.png?r=1a6";

export const NOW_PLAYING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_VIDEO_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w200";
export const UPCOMING_VIDEO_CDN_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      // "Bearer "+process.env.REACT_APP_TMDB_TOKEN,
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzcyMDYwMzQ5YTU4MWJhNzUwYTlmZTZjNDUyNDcxOSIsIm5iZiI6MTc2Njg4OTIxNS44ODgsInN1YiI6IjY5NTA5NmZmZjI2OTI1ODU1ZDg4ZDhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qv3tcvVDNKGWLblk7MwQT0lih0uic486tJkFhZB0mco",
  },
};

export const SUPPORTED_LANGUAGE = [
  { indetifier: "en", name: "English" },
  { indetifier: "fr", name: "France" },
  { indetifier: "hindi", name: "Hindi" },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
