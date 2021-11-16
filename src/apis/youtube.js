import axios from "axios";

const KEY = "AIzaSyBnDwFC5HodK7pPKHVu_qrmwtJ_IKN8egY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
