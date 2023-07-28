const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id: charId } = req.params;
    const { data } = await axios(`${URL}${charId}`);

    //Se pudo hacer la solicitud del axios pero la API no tiene info, entonces me indica error
    if (data.error) {
      return res.status(404).json({ error: data.error });
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
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getCharById };
