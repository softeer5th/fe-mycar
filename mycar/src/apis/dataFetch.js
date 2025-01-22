const getThumbnails = async () => {
  const data = await fetch(
    "http://127.0.0.1:3000/carThumbnails"
  ).then((response) => response.json());
  return data;
};

export {getThumbnails}