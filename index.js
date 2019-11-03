import dotenv from "dotenv";
import app from "./app";
// import "./sequelize";

dotenv.config();

const PORT = 5000;

const handleListening = () =>
  console.log(
    `✅  Listening on http://localhost:${PORT}`,
    process.env.NODE_ENV
  );

app.listen(process.env.PORT, handleListening);
