import models from "./sequelize";

export const home = async (req, res) => {
  try {
    await models.Album.findAll().then(result => res.json(result));
  } catch (error) {
    console.log("error catch :", error);
  }
};

export const albumDetail = async (req, res) => {
  const {
    params: { id: albumId }
  } = req;
  try {
    await models.Album.findAll({
      where: { albumId },
      include: { model: models.Song }
    }).then(result => res.json(result));
  } catch (error) {
    console.log("error catch :", error);
  }
};
