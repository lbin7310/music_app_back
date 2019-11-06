export default (sequelize, type) => {
  return sequelize.define("album", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: type.STRING,
      allowNull: false
    },
    artist: {
      type: type.STRING,
      allowNull: false
    },
    saleDate: {
      type: type.STRING,
      allowNull: false
    },
    coverImgUrl: {
      type: type.STRING,
      allowNull: false
    },
    genre: {
      type: type.STRING,
      allowNull: false
    },
    planingCompany: {
      type: type.STRING,
      allowNull: false
    }
  });
};
