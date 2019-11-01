import express from "express";
import routes from "../routes";
import { home } from "../controllers/globalController";

const globalRouter = express();

globalRouter.get(routes.HOME, home);

export default globalRouter;
