import {DateTime} from "luxon";

export const formatTimestamp = (timestamp) => {
  const humanizedDate = DateTime.fromMillis(timestamp).toRelative();
  return humanizedDate;
};

