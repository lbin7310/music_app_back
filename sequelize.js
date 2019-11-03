import Sequelize from "sequelize";
import dotenv from "dotenv";
import AlbumModel from "./models/Album";
import SongModel from "./models/Song";
import config from "./config.json";

dotenv.config();

const sequelize = new Sequelize(
  config.DB_NAME || "",
  config.DB_USER || "",
  config.DB_PASSWORD || "",
  {
    host: config.DB_HOST || "",
    port: config.DB_PORT || "",
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("✅  Database & tables created");
  })
  .catch(error => console.log(`Not connect : ${error}`));

const Album = AlbumModel(sequelize, Sequelize);
const Song = SongModel(sequelize, Sequelize);

Album.hasMany(Song, { foreignKey: "albumId" });

export default { Album, Song };
