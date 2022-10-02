
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return date;
};

