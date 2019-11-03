import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import albumRouter from "./routers/albumRouter";

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "http://13.125.71.215:1031"],
  optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.HOME, globalRouter);
app.use(routes.ALBUM, albumRouter);

export default app;
