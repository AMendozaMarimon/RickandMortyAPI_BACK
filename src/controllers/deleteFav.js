const { Character } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await Character.destroy({
      where: {
        id: id,
      },
    });

    const allFav = await Character.findAll();

    return res.json(allFav);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  };
};

module.exports = { deleteFav };
