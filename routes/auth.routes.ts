import express from "express";

const router = express.Router();

import { testRoute } from "../controllers/auth.controller";

router.get("/user/:id", testRoute);

export default router;
