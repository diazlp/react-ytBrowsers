import axios from "axios";

//GET API KEY -> console.cloud.google.com
const KEY = "AIzaSyBXLcQHCfH-N23s8I15AS375ORDKJgqvWI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
