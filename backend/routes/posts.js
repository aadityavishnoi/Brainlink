import express from "express";
import {
    getPosts,
    getSinglePost
} from "../controller/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get|("/:slug", getSinglePost);

export default router;