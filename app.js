import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./Router";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://music-web-deploy.s3-website.ap-northeast-2.amazonaws.com"
  ],
  optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

export default app;
