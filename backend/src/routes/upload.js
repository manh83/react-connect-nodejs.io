import express from "express";
import { upload,uploadFile } from "../controllers/upload";

const router = express.Router()

router.post('/upload',uploadFile,upload)

export default router