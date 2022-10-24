import express from "express";

const router = express.Router();

import { testRoute } from "../controllers/auth.controller";

router.post("/user/:id", testRoute);

export default router;
