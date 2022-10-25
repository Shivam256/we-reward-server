import express from "express";

const router = express.Router();

import { testRoute } from "../controllers/auth.controller";

router.post("/user", testRoute);

export default router;
