const { server } = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

// server.listen(PORT, async () => {
//   await conn.sync({ force: true });
//   console.log("Server raised in port: " + PORT);
// });

conn
  .sync({ force: false })
  .then((value) => {
    server.listen(PORT, () => {
      console.log("Server and DB Runnig!!");
    });
  })
  .catch((err) => console.error(err));
