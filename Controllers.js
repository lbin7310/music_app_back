import models from "./models";

export const home = async (req, res) => {
  try {
    await models.Album.findAll().then(result => res.json(result));
  } catch (error) {
    console.log("error catch :", error);
  }
};

export const albumDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await models.Album.findAll({
      where: { id },
      include: { model: models.Song }
    }).then(result => res.json(result));
  } catch (error) {
    console.log("error catch :", error);
  }
};
