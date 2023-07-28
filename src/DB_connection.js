require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineCharacterModel = require("./models/Character");
const defineUserModel = require("./models/User");

const sequelize = new Sequelize(
  `postgres://postgres:Mendozza002@localhost:5432/rickandmorty`,
  { logging: false, native: false }
);

defineCharacterModel(sequelize);
defineUserModel(sequelize);

const { User, Character } = sequelize.models;

User.belongsToMany(Character, { through: "user_character" });
Character.belongsToMany(User, { through: "user_character" });

module.exports = {
  User,
  Character,
  conn: sequelize,
};
