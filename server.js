const app = require("./app");
const { connectMongo } = require("./db/connection");
require("dotenv").config();
const PORT = process.env.PORT;

const start = async () => {
  await connectMongo();

  app.listen(PORT, () => {
    console.log("Server running. Use our API on port: 3001");
  });
};

start();
