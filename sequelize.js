import Sequelize from "sequelize";
import dotenv from "dotenv";
import AlbumModel from "./models/Album";
import SongModel from "./models/Song";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT || "",
    dialect: "mysql",
    dialectOptions: {
      ssl: true
    },
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
