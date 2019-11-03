import models from "../sequelize";

export const home = async (req, res) => {
  try {
    await models.Album.findAll().then(result => res.json(result));
  } catch (error) {
    console.log(error);
  }
};

export const albumDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const albumId = parseInt(id, 10);
  await models.Album.findAll({
    where: { albumId },
    include: { model: models.Song }
  }).then(result => res.json(result));
};
export const somthing = (req, res) => res.send();
