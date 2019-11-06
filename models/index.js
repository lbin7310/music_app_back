import Sequelize from "sequelize";
import sequelize from "../sequelize";
import AlbumModel from "./Album";
import SongModel from "./Song";

const Album = AlbumModel(sequelize, Sequelize);
const Song = SongModel(sequelize, Sequelize, Album);

Album.hasMany(Song, { foreignKey: "albumId" });

export default { Album, Song };
