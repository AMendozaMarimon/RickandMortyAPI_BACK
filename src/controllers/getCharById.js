const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}${id}`)
    .then(({ data }) => {
      if (data.error) {
        return res.status(404).send(data.error);
      }
      const { id, status, name, species, origin, image, gender, location, created } = data;
      const character = {
        id: Number(id),
        status: status,
        name: name,
        species: species,
        origin: origin,
        image: image,
        gender: gender,
        location: location,
        created: created
      };
      return res.status(200).json(character);
    })
    .catch((axiosError) => {
      return res.status(500).send(axiosError.message);
    });
};

module.exports = { getCharById };
