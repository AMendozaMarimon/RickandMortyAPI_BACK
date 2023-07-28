const { Character } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, status, species, gender, origin, image } = req.body;

  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  };

  if (id) {
    try {
      await Character.create({
        id: id,
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender,
      });
  
      const allFavChar = await Character.findAll();
  
      return res.json(allFavChar);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    };

  }
};

module.exports = { postFav };
