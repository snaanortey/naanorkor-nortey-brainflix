import {DateTime} from "luxon";

export const formatTimestamp = (timestamp) => {
  const humanizedDate = DateTime.fromMillis(timestamp).toRelative();
  return humanizedDate;
};

// API key generated 
export const APIKey = "d0c50c53-8d5c-46b5-90ff-20eb4cd49a73";

export const APIBaseUrl = "https://project-2-api.herokuapp.com";

export const firstDisplayVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

