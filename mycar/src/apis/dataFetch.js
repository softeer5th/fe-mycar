const getThumbnails = async () => {
  const data = await fetch('http://127.0.0.1:3000/carThumbnails').then((response) =>
    response.json(),
  );
  return data;
};

const getOptions = async (modelName) => {
  const data = await fetch(`http://127.0.0.1:3000/carDetailModels/${modelName}`).then((response) =>
    response.json(),
  );

  return data;
};

const getColorList = async () => {
  const data = await fetch(`http://127.0.0.1:3000/carColorList`).then((response) =>
    response.json(),
  );

  return data;
};

const getHwOptions = async () => {
  const data = await fetch(`http://127.0.0.1:3000/hardwareOptionList`).then((response) =>
    response.json(),
  );

  return data;
};

export { getThumbnails, getOptions, getColorList, getHwOptions };
