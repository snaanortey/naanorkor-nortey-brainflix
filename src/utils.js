import {DateTime} from "luxon";
import axios from "axios";

export const formatTimestamp = (timestamp) => {
  const humanizedDate = DateTime.fromMillis(timestamp).toRelative();
  return humanizedDate;
};

// API key generated 
export const APIKey = "d0c50c53-8d5c-46b5-90ff-20eb4cd49a73";

export const APIBaseUrl = "https://project-2-api.herokuapp.com";

// Issues a get HTTP request with axios and returns a promise
export const getVideos = () => {
  const getVideosPromise = axios.get(`${APIBaseUrl}/videos`,
  {
    params: {
      api_key: APIKey,
    }
  })

  return getVideosPromise;
}

// Issues a get HTTP request with axios using an id parameter, and returns a promise
export const getVideosWithId = async (id) => {
  const getVideosWithIdPromise = axios.get(`${APIBaseUrl}/videos/${id}`, {
    params: {
      api_key: APIKey,
    }
  })
  return getVideosWithIdPromise;
}