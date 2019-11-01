import models from "../sequelize";

export const home = async (req, res) => {
  await models.Album.findAll().then(result => res.json(result));
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
