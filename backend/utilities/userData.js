const axios = require("axios");

const userData = async (URL) => {
  const res = await axios.get(URL);
  var dataSaveInDB = res.data.results.map((data) => {
    const { id, ...restData } = data;
    return restData;
  });

  return dataSaveInDB;
};

module.exports = { userData };
