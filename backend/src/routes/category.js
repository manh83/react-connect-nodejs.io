import express from "express";
import { getAll,getOneCategory,create,updateCategory,removeCategory } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categories",getAll);
router.get("/categories/:id", getOneCategory);
router.post("/categories", checkPermission,create);
router.put("/categories/:id", checkPermission,updateCategory);
router.delete("/categories/:id", checkPermission,removeCategory);

export default router;