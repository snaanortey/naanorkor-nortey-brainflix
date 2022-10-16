import { DateTime } from "luxon";
import axios from "axios";

export const formatTimestamp = (timestamp) => {
  const humanizedDate = DateTime.fromMillis(timestamp).toRelative();
  return humanizedDate;
};

export const APIBaseUrl = "http://localhost:5050";

export const firstDisplayVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

// Issues a post http request with axios and returns a promise
export const postComment = (videoId, commentToPost) => {
  const postCommentPromise = axios.post(
    `${APIBaseUrl}/videos/${videoId}/comments`,
    commentToPost
  );
  return postCommentPromise;
};
