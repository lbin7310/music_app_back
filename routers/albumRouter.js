import express from "express";
import routes from "../routes";
import { albumDetail } from "../controllers/globalController";

const albumRouter = express();

albumRouter.get(routes.ALBUM_DETAIL, albumDetail);

export default albumRouter;
