import express from "express";
import { home, albumDetail } from "./Controllers";

const router = express();

router.get("/album/:id", albumDetail);
router.get("/", home);

export default router;
