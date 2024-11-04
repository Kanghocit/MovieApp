
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "109e3ed23aeac1fa06240c81bbb53162";

//https://api.themoviedb.org/3/movie/550?api_key=109e3ed23aeac1fa06240c81bbb53162

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {getTrendingVideos}
